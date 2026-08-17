from datetime import datetime

from sqlalchemy import DateTime, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.connection import Base


class User(Base):
    __tablename__ = "users"

    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )

    name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        nullable=False,
        index=True,
    )

    role: Mapped[str] = mapped_column(
        String(50),
        default="developer",
        nullable=False,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    tasks = relationship(
        "Task",
        back_populates="user",
    )

    focus_sessions = relationship(
        "FocusSession",
        back_populates="user",
    )

    gamification_profile = relationship(
        "GamificationProfile",
        back_populates="user",
        uselist=False,
    )

    analytics_events = relationship(
        "AnalyticsEvent",
        back_populates="user",
    )