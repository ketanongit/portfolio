"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/actions/login";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    const success = await login(password);
    if (success) {
      router.push("/admin");
    } else {
      alert("Invalid password");
    }
  }

  return (
    <form onSubmit={handleLogin} className="p-6 space-y-4">
      <h1 className="text-xl font-bold">Admin Login</h1>
      <input
        type="password"
        placeholder="Enter admin password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}
