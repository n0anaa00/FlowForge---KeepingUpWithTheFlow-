from datetime import datetime
from pydantic import BaseModel, ConfigDict


class FocusSessionCreate(BaseModel):
    duration_minutes: int
    user_id:int 

class FocusSessionResponse(BaseModel):
    id: int
    duration_minutes:int
    xp_earned:int
    started_at: datetime
    completed_at: datetime | None
    user_id:int

    model_config = ConfigDict(from_attributes=True)

    with ConfigDict:
        orm_mode = True
        