import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Home from './components/Home';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import { pizzaCart as initialCart, pizzas } from './pizzas';
import { CartItem } from './types';

export default function App() {
  const [view, setView] = useState<'home' | 'cart' | 'register' | 'login'>('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const increaseCount = (id: string) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseCount = (id: string) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(item => 
        item.id === id ? { ...item, count: item.count - 1 } : item
      );
      return updatedCart.filter(item => item.count > 0);
    });
  };

  const addToCart = (id: string) => {
    const pizzaToAdd = pizzas.find(p => p.id === id);
    if (!pizzaToAdd) return;

    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevCart, {
          id: pizzaToAdd.id,
          name: pizzaToAdd.name,
          price: pizzaToAdd.price,
          count: 1,
          img: pizzaToAdd.img
        }];
      }
    });
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-gray-50">
      <Navbar setView={setView} total={total} />
      
      {view === 'home' && <Home onAddToCart={addToCart} />}
      {view === 'cart' && (
        <Cart 
          setView={setView} 
          cart={cart} 
          increaseCount={increaseCount} 
          decreaseCount={decreaseCount} 
          total={total}
        />
      )}
      {view === 'register' && <RegisterPage />}
      {view === 'login' && <LoginPage />}

      <Footer />
    </div>
  );
}
