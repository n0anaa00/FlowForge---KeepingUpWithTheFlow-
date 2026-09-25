from datetime import datetime
from sqlalchemy.orm import Session
from app.models.focus_session import FocusSession
from app.services.gamification_service import add_xp

def create_focus_session(
        db: Session, 
        user_id: int,
        duration_minutes: int,
    ) -> FocusSession: 

    started_at = datetime.now(datetime.timezone.utc)

    completed_at = datetime.now(datetime.timezone.utc)

    xp = duration_minutes * 2

    session= FocusSession(
        
        user_id=user_id,
        duration_minutes=duration_minutes,
        xp_earned=xp,
        started_at=started_at,
        completed_at=completed_at,
    )
    db.add(session)

    add_xp(db, user_id, xp,)


    db.commit()
    db.refresh(session)
    return session