import { signOut } from "@/auth";

export function LogoutButton() {
  async function handleLogout() {
    "use server";
    await signOut();
  }

  return (
    <form action={handleLogout} className="inline">
      <button className="ml-10 hover:bg-zinc-300 p-2 rounded bg-pink-300 text-black">
        Logout
      </button>
    </form>
  );
}
