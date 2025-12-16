"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="
        fixed left-4 bottom-6 z-[9999]
        bg-[#FFD700] text-black font-semibold
        px-4 py-2 rounded-full shadow-xl
        hover:brightness-110 transition
      "
    >
      ← Back
    </button>
  );
}
