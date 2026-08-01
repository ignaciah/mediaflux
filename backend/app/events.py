import json
import redis
from .config import settings

r = redis.Redis.from_url(settings.REDIS_URL)

def publish_event(job_id: str, stage: str, status: str, payload: dict | None = None):
    message = {
        "job_id": job_id,
        "stage": stage,
        "status": status,
        "payload": payload or {},
    }
    r.publish(f"job:{job_id}", json.dumps(message))

