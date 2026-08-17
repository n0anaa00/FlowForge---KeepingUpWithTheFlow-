from sqlalchemy import Boolean, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.connection import Base


class Achievement(Base):
    __tablename__ = "achievements"

    id: Mapped[int] = mapped_column(
        primary_key=True,
    )

    title: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
    )

    xp_reward: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )


class UserAchievement(Base):
    __tablename__ = "user_achievements"

    id: Mapped[int] = mapped_column(
        primary_key=True,
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        nullable=False,
    )

    achievement_id: Mapped[int] = mapped_column(
        ForeignKey("achievements.id"),
        nullable=False,
    )

    unlocked: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
    )