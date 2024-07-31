import { signIn } from "@/auth";

export function LoginButton() {
  async function handleLogin() {
    "use server";
    await signIn();
  }

  return (
    <form action={handleLogin} className="inline">
      <button className="ml-10 hover:bg-zinc-300 p-2 rounded bg-pink-300 text-black">
        Login
      </button>
    </form>
  );
}
