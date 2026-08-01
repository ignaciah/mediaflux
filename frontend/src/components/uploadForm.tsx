import { useState } from "react";
import { uploadVideo } from "../lib/api";

export function UploadForm({ onJobCreated }: { onJobCreated: (id: string) => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    const { job_id } = await uploadVideo(file);
    setLoading(false);
    onJobCreated(job_id);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="video/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button type="submit" disabled={!file || loading}>
        {loading ? "Uploading..." : "Start Pipeline"}
      </button>
    </form>
  );
}
