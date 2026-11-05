from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
)

from sqlalchemy.orm import Session

from app.database.connection import get_db

from app.schemas.focus import (
    FocusSessionCreate,
    FocusSessionResponse,
)

from app.services.focus_service import (
    start_focus_session,
    complete_focus_session,
)


router = APIRouter(
    prefix="/focus",
    tags=["Focus"],
)


@router.post(
    "/sessions",
    response_model=FocusSessionResponse,
)
def create_focus_session(
    session_data: FocusSessionCreate,
    db: Session = Depends(get_db),
):
    return start_focus_session(
        db=db,
        user_id=session_data.user_id,
        duration_minutes=session_data.duration_minutes,
    )


@router.post(
    "/sessions/{session_id}/complete",
    response_model=FocusSessionResponse,
)
def finish_focus_session(
    session_id: int,
    db: Session = Depends(get_db),
):
    try:
        return complete_focus_session(
            db=db,
            session_id=session_id,
        )

    except ValueError as error:
        raise HTTPException(
            status_code=404,
            detail=str(error),
        )
