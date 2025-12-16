"use client";

import { SessionProvider } from "next-auth/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

// Base product shape used in the cart
export type CartProduct = {
  id: string;        // must be unique & stable for each product
  title: string;
  price: number;
  image?: string;
};

export type CartItem = CartProduct & {
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (product: CartProduct, qty?: number) => void;
  updateQuantity: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_KEY = "zarine-cart-v1";

function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  // 1) Load from localStorage on first mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const raw = window.localStorage.getItem(CART_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (err) {
      console.error("Error loading cart from localStorage", err);
    } finally {
      setLoaded(true);
    }
  }, []);

  // 2) Save to localStorage whenever items change (after initial load)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!loaded) return; // do not overwrite before we load

    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch (err) {
      console.error("Error saving cart to localStorage", err);
    }
  }, [items, loaded]);

  const addToCart = (product: CartProduct, qty: number = 1) => {
    setItems((prev) => {
      const index = prev.findIndex((p) => p.id === product.id);
      if (index === -1) {
        return [...prev, { ...product, qty }];
      }
      const next = [...prev];
      next[index] = {
        ...next[index],
        qty: next[index].qty + qty,
      };
      return next;
    });
  };

  const updateQuantity = (productId: string, qty: number) => {
    setItems((prev) => {
      if (qty <= 0) {
        return prev.filter((p) => p.id !== productId);
      }
      return prev.map((item) =>
        item.id === productId ? { ...item, qty } : item
      );
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const value: CartContextType = {
    items,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}

// 👇 DEFAULT EXPORT – RootLayout must import like: import Providers from "./providers"
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>{children}</CartProvider>
    </SessionProvider>
  );
}
