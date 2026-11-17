from datetime import date, datetime
from sqlalchemy.orm import Session
from app.models.focus_session import FocusSession
from app.models.analytics_event import AnalyticsEvent

from app.services.gamification_service import (
    add_xp,
    update_streak,
)


def start_focus_session(
    db: Session,
    user_id: int,
    duration_minutes: int,
) -> FocusSession:
    session = FocusSession(
        user_id=user_id,
        duration_minutes=duration_minutes,
        xp_earned=0,
        started_at=datetime.utcnow(),
        completed_at=None,
    )

    db.add(session)
    db.commit()
    db.refresh(session)

    return session


def complete_focus_session(
    db: Session,
    session_id: int,
) -> FocusSession:
    session = (
        db.query(FocusSession)
        .filter(FocusSession.id == session_id)
        .first()
    )

    if session is None:
        raise ValueError("Focus session not found")

    if session.completed_at is not None:
        raise ValueError("Focus session is already completed")

    now = datetime.utcnow()

    elapsed_seconds = (
        now - session.started_at
    ).total_seconds()

    actual_duration = max(
        1,
        int(elapsed_seconds // 60),
    )

    xp = actual_duration * 2

    try:
        session.duration_minutes = actual_duration
        session.xp_earned = xp
        session.completed_at = now

        add_xp(
            db=db,
            user_id=session.user_id,
            amount=xp,
        )

        update_streak(
            db=db,
            user_id=session.user_id,
            focus_date=date.today(),
        )

        event = AnalyticsEvent(
            user_id=session.user_id,
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