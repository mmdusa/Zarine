// app/auth/signin/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="max-w-md mx-auto px-6 py-16 text-white">
      <h1 className="text-3xl font-bold mb-6">Sign in</h1>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await signIn("credentials", { email, password, callbackUrl: "/" });
        }}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg bg-white/10 px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg bg-white/10 px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="rounded-lg bg-[#FFD700] text-black font-semibold px-4 py-2">
          Sign in
        </button>
      </form>
    </main>
  );
}
