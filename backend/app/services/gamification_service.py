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