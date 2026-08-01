from fastapi import FastAPI
from .routers import upload, health

app = FastAPI(title="MediaFlux Backend")

app.include_router(upload.router)
app.include_router(health.router)
# jobs, assets routers to be added similarly
