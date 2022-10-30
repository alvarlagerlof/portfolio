"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="font-heading text-4xl md:text-7xl">Error</h1>

        <h2 className="font-subheading text-xl md:text-2xl max-w-[50ch] space-y-2">
          <span>Message:</span>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </h2>
      </header>
      <main>
        <button onClick={() => reset()} className="bg-primary rounded-full text-white py-1 px-3">
          Reset error boundary
        </button>
      </main>
    </div>
  );
}
