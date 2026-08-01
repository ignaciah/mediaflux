from b2sdk.v2 import InMemoryAccountInfo, B2Api, UploadSourceBytes
from .config import settings

info = InMemoryAccountInfo()
b2_api = B2Api(info)
b2_api.authorize_account("production", settings.B2_KEY_ID, settings.B2_APP_KEY)

def upload_bytes(bucket_name: str, path: str, data: bytes, content_type: str):
    bucket = b2_api.get_bucket_by_name(bucket_name)
    return bucket.upload(
        UploadSourceBytes(data),
        file_name=path,
        content_type=content_type,
    )
