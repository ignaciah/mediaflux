export function subscribeToJob(jobId: string, onMessage: (msg: any) => void) {
  const ws = new WebSocket(
    `${process.env.NEXT_PUBLIC_WS_URL}/ws/jobs/${jobId}`
  );
  ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    onMessage(data);
  };
  return ws;
}
