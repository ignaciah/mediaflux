from pydantic import BaseSettings

class Settings(BaseSettings):
    B2_KEY_ID: str
    B2_APP_KEY: str
    B2_BUCKET_UPLOADS: str = "mediaflux-uploads"
    B2_BUCKET_GENERATED: str = "mediaflux-generated"
    B2_BUCKET_PROVENANCE: str = "mediaflux-provenance"
    GENBLAZE_API_KEY: str
    REDIS_URL: str = "redis://redis:6379/0"

    OPENAI_API_KEY: str | None = None
    ELEVENLABS_API_KEY: str | None = None
    RUNWAY_API_KEY: str | None = None
    LUMA_API_KEY: str | None = None
    GMI_API_KEY: str | None = None
    NVIDIA_NIM_API_KEY: str | None = None

    class Config:
        env_file = ".env"

settings = Settings()
