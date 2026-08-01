import hashlib
import json

def sha256_bytes(data: bytes) -> str:
    return hashlib.sha256(data).hexdigest()

def build_manifest(job_id: str, stages: list[dict]) -> str:
    manifest = {
        "job_id": job_id,
        "version": 1,
        "stages": stages,
    }
    return json.dumps(manifest, indent=2)
