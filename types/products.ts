// types/products.ts

export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;      // number, NOT string like "€6.90"
  weight?: string;
  category?: string;
  description?: string;
};
