from sqlalchemy.orm import Session
from datetime import datetime
from app.models.gamification import GamificationProfile

def get_or_create_profile(
    db: Session,
    user_id: int,
) -> GamificationProfile:
    profile = (
        db.query(GamificationProfile)
        .filter(GamificationProfile.user_id == user_id)
        .first()
    )

    if profile:
        return profile

    profile = GamificationProfile(
        user_id=user_id,
        xp=0,
        level=1,
        streak=0,
    )

    db.add(profile)
    db.flush()

    return profile


def add_xp(
    db: Session,
    user_id: int,
    amount: int,
) -> GamificationProfile:
    profile = get_or_create_profile(db, user_id)

    profile.xp += amount
    profile.level = (profile.xp // 500) + 1

    return profile


def update_streak(
    db: Session,
    user_id: int,
    focus_date: date,
) -> GamificationProfile:
    profile = get_or_create_profile(db, user_id)

    yesterday = focus_date - timedelta(days=1)

    if profile.last_focus_date == focus_date:
        return profile

    if profile.last_focus_date == yesterday:
        profile.streak += 1
    else:
        profile.streak = 1

    profile.last_focus_date = focus_date
    return profile