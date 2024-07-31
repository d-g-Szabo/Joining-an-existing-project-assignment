"use client";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function GlobalError({ error, reset }) {
  function handleReset() {
    reset();
  }
  return (
    <html>
      <main>
        <h2>Oh no! Something went wrong on that page! 🙈</h2>
        <p>{error.message}</p>
        <button onClick={handleReset}>Try again</button>
      </main>
    </html>
  );
}
