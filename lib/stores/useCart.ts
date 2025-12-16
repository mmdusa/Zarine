// lib/stores/useCart.ts
"use client";

import { create } from "zustand";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  img: string;
  qty: number;
  meta?: string;
};

type CartState = {
  items: CartItem[];
  add: {
    (id: string, title: string, price: number, img: string, meta?: string): void;
    (item: {
      id: string;
      title?: string;
      name?: string;
      price?: number;
      priceNumber?: number;
      img?: string;
      image?: string;
      meta?: any;
    }, qty?: number): void;
  };
  remove: (id: string) => void;
  // ✅ 1. ADDED THIS DEFINITION
  increment: (id: string) => void;
  clear: () => void;
  totalCount: number;
  totalPrice: number;
};

const FALLBACK_IMG = "/images/placeholder.jpg";
const STORAGE_KEY = "zarine-cart";

function loadInitialItems(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch {
    return [];
  }
}

function saveItems(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

export const useCart = create<CartState>()((set, get) => ({
  items: loadInitialItems(),

  add: (...args: any[]) => {
    let id = "";
    let title = "";
    let price = 0;
    let img = FALLBACK_IMG;
    let meta: string | undefined = undefined;
    let qty = 1;

    if (typeof args[0] === "string") {
      [id, title, price, img, meta] = args as [string, string, number, string, string?];
    } else if (typeof args[0] === "object" && args[0] !== null) {
      const it = args[0] as any;
      qty = typeof args[1] === "number" ? args[1] : 1;
      id = it.id;
      title = it.title ?? it.name ?? "Untitled";
      price = Number(it.price ?? it.priceNumber ?? 0);
      img = it.img || it.image || FALLBACK_IMG;
      if (typeof it.meta === "string") {
        meta = it.meta;
      } else if (it.meta && typeof it.meta === "object") {
        meta = Object.entries(it.meta)
          .filter(([, v]) => v !== undefined && v !== null && v !== "")
          .map(([k, v]) => `${k}: ${v}`)
          .join(" • ");
      }
    } else {
      return;
    }

    price = Number.isFinite(price) ? price : 0;
    img = img || FALLBACK_IMG;
    title = title || "Untitled";

    set((state) => {
      const existing = state.items.find((x) => x.id === id);
      let newItems: CartItem[];
      if (existing) {
        newItems = state.items.map((x) =>
          x.id === id ? { ...x, qty: x.qty + qty } : x
        );
      } else {
        newItems = [...state.items, { id, title, price, img, qty, meta }];
      }
      saveItems(newItems);
      return { items: newItems };
    });
  },

  // ✅ 2. ADDED THIS LOGIC
  increment: (id) =>
    set((s) => {
      const newItems = s.items.map((x) =>
        x.id === id ? { ...x, qty: x.qty + 1 } : x
      );
      saveItems(newItems);
      return { items: newItems };
    }),

  remove: (id) =>
    set((s) => {
      const newItems = s.items
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0);
      saveItems(newItems);
      return { items: newItems };
    }),

  clear: () =>
    set(() => {
      saveItems([]);
      return { items: [] };
    }),

  get totalCount() {
    return get().items.reduce((n, i) => n + i.qty, 0);
  },

  get totalPrice() {
    return get().items.reduce((n, i) => n + i.price * i.qty, 0);
  },
}));