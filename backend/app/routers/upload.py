from fastapi import APIRouter, UploadFile
from uuid import uuid4
from ..b2_client import upload_bytes
from ..config import settings
from ..pipeline import pipeline
from ..events import publish_event

router = APIRouter(prefix="/upload", tags=["upload"])

@router.post("/")
async def upload_video(file: UploadFile):
    job_id = str(uuid4())
    video_bytes = await file.read()
    upload_bytes(settings.B2_BUCKET_UPLOADS, f"{job_id}/input.mp4", video_bytes, "video/mp4")
    publish_event(job_id, "job_created", "pending")
    pipeline.run_async(job_id=job_id, video_bytes=video_bytes)
    return {"job_id": job_id}
