import { useState } from "react";
import UploadForm from "@/components/UploadForm";
import ProgressStream from "@/components/ProgressStream";

export default function Home() {
  const [jobId, setJobId] = useState<string | null>(null);

  return (
    <main>
      <h1>MediaFlux</h1>
      {!jobId && <UploadForm onJobCreated={setJobId} />}
      {jobId && <ProgressStream jobId={jobId} />}
    </main>
  );
}

