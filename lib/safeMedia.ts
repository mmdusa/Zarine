// Always return a usable image path
export function primaryImage(images?: string[] | null): string {
  const src = images?.find(Boolean);
  return src || "/images/placeholder.webp";
}

// Ensures a finite number (no NaN/undefined)
export function finitePrice(value: unknown, fallback: number): number {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}
