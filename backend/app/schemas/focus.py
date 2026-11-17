from datetime import datetime
<<<<<<< HEAD

=======
>>>>>>> 7e006074f4b3657b02cf6f9a00673cbd6391a8c8
from pydantic import BaseModel, ConfigDict


class FocusSessionCreate(BaseModel):
    duration_minutes: int
    user_id: int


class FocusSessionResponse(BaseModel):
    id: int
    duration_minutes: int
    xp_earned: int
    started_at: datetime
    completed_at: datetime | None
    user_id: int

    model_config = ConfigDict(
        from_attributes=True
    )


class FocusSessionModel(BaseModel):
    id: int
    duration_minutes: int
    xp_earned: int
    started_at: datetime
    completed_at: datetime | None
    user_id: int

    model_config = ConfigDict(
        from_attributes=True
    )