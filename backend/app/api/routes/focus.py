from fastapi import (APIRouter, Depends,)

from sqlalchemy.orm import Session
from backend.app.api.dependencies import get_db

from app.schemas.focus_session import (FocusSessionCreate, FocusSessionResponse,)

from app.services.focus_service import (create_focus_session,)


router = APIRouter(
    prefix="/focus",
    tags=["focus"],
)


@router.post(    "/sessions",
    response_model=FocusSessionResponse,
)
def create_focus_session(
    session_data: FocusSessionCreate,
    db: Session = Depends(get_db),
):
    return complete_focus_session(
        db=db,
        user_id=session_data.user_id,
        duration_minutes=session_data.duration_minutes,
    )