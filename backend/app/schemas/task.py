from datetime import datetime

from pydantic import BaseModel, ConfigDict


class TaskBase(BaseModel):
    title: str
    description: str | None = None
    story_points: int = 1
    status: str = "todo"


class TaskCreate(TaskBase):
    user_id: int


class TaskUpdate(BaseModel):
    title: str | None = None
    description: str | None = None
    story_points: int | None = None
    status: str | None = None


class TaskResponse(TaskBase):
    id: int
    user_id: int
    created_at: datetime

    model_config = ConfigDict(
        from_attributes=True
    )