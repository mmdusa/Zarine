"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      .value;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Email or password is not correct");
    } else {
      router.push("/");
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#120c08] to-black pt-24">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <div className="w-full max-w-md bg-black/60 border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur">
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Login
          </h1>
          <p className="text-sm text-white/70 mb-6">
            Welcome back to{" "}
            <span className="text-[#FFD700] tracking-[0.2em]">ZARINÉ</span>.
          </p>

          {error && (
            <p className="mb-4 text-sm text-red-400 bg-red-950/40 border border-red-500/40 rounded-lg px-3 py-2">
              {error}
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="email"
                className="block text-xs font-medium uppercase tracking-wide text-white/70"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl border border-white/20 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/80 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-xs font-medium uppercase tracking-wide text-white/70"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full rounded-xl border border-white/20 bg-black/40 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/80 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#FFD700] text-black text-sm font-semibold px-4 py-2.5 hover:brightness-110 transition shadow-[0_0_18px_rgba(255,215,0,0.45)]"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-xs text-center text-white/60">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-[#FFD700] underline underline-offset-2">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
