import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000",
});

export async function uploadVideo(file: File) {
  const form = new FormData();
  form.append("file", file);
  const res = await api.post("/upload", form);
  return res.data;
}
