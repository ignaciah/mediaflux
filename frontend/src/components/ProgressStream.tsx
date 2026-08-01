import { useEffect, useState } from "react";
import { subscribeToJob } from "../lib/websocket";

type EventMsg = {
  stage: string;
  status: string;
};

export function ProgressStream({ jobId }: { jobId: string }) {
  const [events, setEvents] = useState<EventMsg[]>([]);

  useEffect(() => {
    const ws = subscribeToJob(jobId, (msg) => {
      setEvents((prev) => [...prev, msg]);
    });
    return () => ws.close();
  }, [jobId]);

  return (
    <div>
      <h3>Pipeline Progress</h3>
      <ul>
        {events.map((e, i) => (
          <li key={i}>
            <strong>{e.stage}</strong>: {e.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
