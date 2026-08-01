# Architecture

- Frontend: Next.js (upload, progress, playback)
- Backend: FastAPI + Genblaze (pipeline orchestration)
- Storage: Backblaze B2 (uploads, generated, provenance)
- Events: Redis + WebSockets
- Provenance: SHA-256 manifests in `mediaflux-provenance`

