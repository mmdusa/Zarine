"use client";

import { create } from "zustand";

type FavState = {
  ids: Set<string>;
  toggle: (id: string) => void;
  has: (id: string) => boolean;
};

const persisted = (): Set<string> => {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem("fav_ids");
    return raw ? new Set<string>(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
};

export const useFavorites = create<FavState>((set, get) => ({
  ids: persisted(),
  toggle: (id: string) => {
    const ids = new Set(get().ids);
    if (ids.has(id)) ids.delete(id);
    else ids.add(id);
    set({ ids });
    if (typeof window !== "undefined") {
      localStorage.setItem("fav_ids", JSON.stringify(Array.from(ids)));
    }
  },
  has: (id: string) => get().ids.has(id),
}));
