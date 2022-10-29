"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <p>Something went wrong!</p>
      <pre>{JSON.stringify(error)}</pre>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
