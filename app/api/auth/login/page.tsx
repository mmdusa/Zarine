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
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-4 border border-gray-200 rounded-2xl p-6 shadow-sm bg-white"
      >
        <h1 className="text-2xl font-semibold text-center mb-2">
          Login
        </h1>

        {error && (
          <p className="text-sm text-red-500 text-center">{error}</p>
        )}

        <div className="space-y-2">
          <label className="block text-sm">Email</label>
          <input
            name="email"
            type="email"
            className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/60"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm">Password</label>
          <input
            name="password"
            type="password"
            className="w-full border rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/60"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 rounded-xl text-sm font-medium bg-black text-white"
        >
          Login
        </button>

        <p className="text-xs text-center text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
