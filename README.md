mediaflux/
├─ README.md
├─ LICENSE
├─ .env.example
├─ docker-compose.yml
├─ devcontainer.json
├─ backend/
│  ├─ requirements.txt
│  └─ app/
│     ├─ main.py
│     ├─ config.py
│     ├─ models.py
│     ├─ events.py
│     ├─ pipeline.py
│     ├─ b2_client.py
│     ├─ provenance.py
│     ├─ routers/
│     │  ├─ upload.py
│     │  ├─ jobs.py
│     │  ├─ assets.py
│     │  └─ health.py
│     └─ utils/
│        ├─ ffmpeg.py
│        └─ scenes.py
├─ frontend/
│  ├─ package.json
│  ├─ next.config.mjs
│  ├─ tsconfig.json
│  └─ src/
│     ├─ pages/
│     │  ├─ index.tsx
│     │  └─ job/[id].tsx
│     ├─ components/
│     │  ├─ UploadForm.tsx
│     │  ├─ ProgressStream.tsx
│     │  ├─ SceneGallery.tsx
│     │  ├─ VideoPlayer.tsx
│     │  └─ ProvenanceViewer.tsx
│     ├─ lib/
│     │  ├─ api.ts
│     │  └─ websocket.ts
│     └─ styles/
│        └─ globals.css
└─ docs/
   ├─ ARCHITECTURE.md
   ├─ PIPELINE.md
   ├─ PROVENANCE.md
   ├─ STORAGE.md
   └─ DEVPOST.md

# MediaFlux – Backblaze Gen Media Hackathon

MediaFlux is a reactive, multi-provider generative media pipeline:

- Video → audio → narration → scene images → B-roll → upscaled final video
- Event-streamed progress via Redis + WebSockets
- Backblaze B2 for uploads, generated assets, and provenance manifests
- Genblaze for multi-provider orchestration and provenance

## Quick start (Codespaces)

1. Create `.env` from `.env.example` and fill in keys.
2. Run `docker-compose up --build`.
3. Open `http://localhost:3000` and upload a video.
4. Watch pipeline stages and view provenance.

See `docs/ARCHITECTURE.md` and `docs/PIPELINE.md` for details.
