from sqlalchemy import ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.database.connection import Base


class GamificationProfile(Base):
    __tablename__ = "gamification_profiles"

    id: Mapped[int] = mapped_column(
        primary_key=True,
    )

    xp: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )

    level: Mapped[int] = mapped_column(
        Integer,
        default=1,
        nullable=False,
    )

    streak: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id"),
        unique=True,
        nullable=False,
    )

    user = relationship(
        "User",
        back_populates="gamification_profile",
    )