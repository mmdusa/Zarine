"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type FavCtx = {
  ids: Set<string>;
  toggle: (id: string) => void;
  has: (id: string) => boolean;
};

const Ctx = createContext<FavCtx | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [ids, setIds] = useState<Set<string>>(new Set());

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem("fav_ids");
      if (raw) setIds(new Set(JSON.parse(raw)));
    } catch {}
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem("fav_ids", JSON.stringify([...ids]));
    } catch {}
  }, [ids]);

  const api = useMemo<FavCtx>(
    () => ({
      ids,
      toggle: (id) =>
        setIds((prev) => {
          const next = new Set(prev);
          next.has(id) ? next.delete(id) : next.add(id);
          return next;
        }),
      has: (id) => ids.has(id),
    }),
    [ids]
  );

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
}

export const useFavorites = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useFavorites must be used inside FavoritesProvider");
  return ctx;
};
