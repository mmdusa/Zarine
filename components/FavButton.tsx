"use client";

import { useFavorites } from "./FavoritesContext";

export default function FavButton({ id }: { id: string }) {
  const { has, toggle } = useFavorites();
  const active = has(id);

  return (
    <button
      onClick={() => toggle(id)}
      aria-pressed={active}
      className="h-12 w-12 rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,.12)] grid place-items-center
                 hover:scale-[1.02] active:scale-95 transition"
      title={active ? "Remove from favorites" : "Add to favorites"}
    >
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path
          d="M12 21s-7.5-4.35-9.5-8.27C1 9.65 3.2 6 6.9 6c2.1 0 3.3 1.02 4.1 2.05C11.9 7.02 13.1 6 15.2 6 18.9 6 21.1 9.65 21.5 12.73 19.5 16.65 12 21 12 21z"
          fill={active ? "#e11d48" : "none"}
          stroke={active ? "#e11d48" : "#111"}
          strokeWidth="1.75"
        />
      </svg>
    </button>
  );
}
