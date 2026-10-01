from datetime import datetime
from sqlalchemy.orm import Session
from app.models.focus_session import FocusSession
from app.services.gamification_service import add_xp



from app.service.gamification_service import(
    add_xp,
    update_streak,
)


def complete_focus_session(
    db: Session,
    user_id: int,
    duration_minutes: int,
) -> FocusSession:
    now = datetime.now(datetime.timezone.utc)
    today = date.today()
    xp = duration_minutes * 2

    try:
        session = FocusSession(
            user_id=user_id,
            duration_minutes=duration_minutes,
            xp_earned=xp,
            started_at=now,
            completed_at=now,
        )

        db.add(session)

        add_xp(
            db=db,
            user_id=user_id,
            amount=xp,
        )

        update_streak(
            db=db,
            user_id=user_id,
            focus_date=today,
        )

        event = AnalyticsEvent(
            user_id=user_id,
            event_type="focus_completed",
            title="Focus session completed",
            xp=xp,
            timestamp=now,
        )

        db.add(event)

        db.commit()
        db.refresh(session)

        return session

    except Exception:
        db.rollback()
        raise
