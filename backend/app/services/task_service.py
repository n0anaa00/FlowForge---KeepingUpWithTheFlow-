from sqlalchemy.orm import Session

from app.models.task import Task
from app.schemas.task import (
    TaskCreate,
    TaskUpdate,
)


def create_task(
    db: Session,
    task_data: TaskCreate,
) -> Task:

    task = Task(
        title=task_data.title,
        description=task_data.description,
        story_points=task_data.story_points,
        status=task_data.status,
        user_id=task_data.user_id,
    )

    db.add(task)
    db.commit()
    db.refresh(task)

    return task


def get_task(
    db: Session,
    task_id: int,
) -> Task | None:

    return (
        db.query(Task)
        .filter(Task.id == task_id)
        .first()
    )


def get_tasks(
    db: Session,
) -> list[Task]:

    return db.query(Task).all()


def update_task(
    db: Session,
    task: Task,
    task_data: TaskUpdate,
) -> Task:

    update_data = task_data.model_dump(
        exclude_unset=True
    )

    for field, value in update_data.items():
        setattr(task, field, value)

    db.commit()
    db.refresh(task)

    return task


def delete_task(
    db: Session,
    task: Task,
) -> None:

    db.delete(task)
    db.commit()