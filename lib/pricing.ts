// Deterministic price for a product id (change range if you like)
export function getPriceFromId(id: string, min = 18, max = 79): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) | 0;
  const r = (Math.abs(h) % 1000) / 1000; // 0..0.999
  const v = min + r * (max - min);
  return Math.round(v * 100) / 100;
}

export function formatEUR(n: number): string {
  return new Intl.NumberFormat("en-IT", { style: "currency", currency: "EUR" }).format(n);
}
