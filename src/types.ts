export interface Pizza {
  id: string;
  name: string;
  price: number;
  ingredients: string[];
  img: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  count: number;
  img: string;
}
