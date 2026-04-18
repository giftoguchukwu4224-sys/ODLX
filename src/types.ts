export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  details: string[];
  isNew?: boolean;
  isSale?: boolean;
  stockCount: number;
}

export interface CartItem extends Product {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
