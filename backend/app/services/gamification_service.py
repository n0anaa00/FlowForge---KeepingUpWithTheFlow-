from sqlalchemy.orm import Session
from app.models.gamification import GamificationProfile

def get_or_create_profile(db: Session, user) -> GamificationProfile:

    profile =(
        db.query(GamificationProfile)
        .filter(
            GamificationProfile.user_id == user.id
        )
        .first()
    )

    if profile:
        return profile

    profile = GamificationProfile(user_id=user.id, xp=0, level=1, streak=0,)

    db.add(profile)
    db.commit()
    db.refresh(profile)

    return profile 

def add_xp(
        db:Session,
        user_id:int,
        amount:int,
        ) -> GamificationProfile:
    profile = get_or_create_profile(db, user_id,)

    profile .xp += amount
    profile.level = (profile.xp // 100) + 1
    db.commit()
    db.refresh(profile)

    return profile