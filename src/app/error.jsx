"use client";

export default function GlobalError({ error, reset }) {
  function handleReset() {
    reset();
  }
  return (
    <html>
      <main className="flex justify-center">
        <div className="w-1/2">
          <h1>Error: </h1>
          <p>{error.message}</p>
          <button
            className="ml-10 hover:bg-zinc-300 p-2 rounded bg-pink-300 text-black"
            onClick={handleReset}
          >
            Try again
          </button>
        </div>
      </main>
    </html>
  );
}
