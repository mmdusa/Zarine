"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/stores/useCart";

function useHrefL() {
  const pathname = usePathname();
  const seg = (pathname || "/").split("/")[1];
  const locale = seg && /^[a-z]{2}(-[A-Z]{2})?$/.test(seg) ? `/${seg}` : "";
  return (path: string) => (path.startsWith("/") ? `${locale}${path}` : path);
}

export default function CartBadge({ className = "" }: { className?: string }) {
  const total = useCart((s) => s.totalCount);
  const hrefL = useHrefL();

  return (
    <Link
      href={hrefL("/cart")}
      className={`group relative inline-flex items-center gap-2 ${className}`}
      aria-label={`Open cart (${total})`}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-80 group-hover:opacity-100">
        <path fill="currentColor" d="M7 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4Zm10 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 17 18ZM6.2 6l.8 2h10.9a1 1 0 0 1 .97 1.242l-1.3 5.2a2 2 0 0 1-1.94 1.558H9.33a2 2 0 0 1-1.94-1.393L5.1 5H3V3h2.7a1 1 0 0 1 .96.7Z"/>
      </svg>
      <span className="min-w-6 h-6 px-2 rounded-full border border-white/25 text-xs flex items-center justify-center bg-black/30 group-hover:bg-white/10" aria-live="polite">
        {total}
      </span>
    </Link>
  );
}
