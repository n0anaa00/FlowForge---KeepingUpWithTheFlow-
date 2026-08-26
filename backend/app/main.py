from fastapi import FastAPI

from app.api.routes.health import router as health_router
from app.api.routes.users import router as users_router
from app.api.routes.tasks import router as tasks_router

from app.core.config import settings


app = FastAPI(
    title=settings.app_name,
    version=settings.app_version,
)


app.include_router(
    health_router,
    prefix="/api",
)

app.include_router(
    users_router,
    prefix="/api",
)



app.include_router(
    tasks_router,
    prefix="/api",
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to FlowForge API",
        "version": settings.app_version,
    }