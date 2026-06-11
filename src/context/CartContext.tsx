import { createContext, useState, ReactNode } from 'react';
import { CartItem, Pizza } from '../types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (pizza: Pizza) => void;
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  total: number;
  totalItems: number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (pizza: Pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === pizza.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [
          ...prevCart,
          {
            id: pizza.id,
            name: pizza.name,
            price: pizza.price,
            img: pizza.img,
            count: 1,
          },
        ];
      }
    });
  };

  const increaseCount = (id: string) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id: string) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      return updatedCart.filter((item) => item.count > 0);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseCount,
        decreaseCount,
        total,
        totalItems,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
