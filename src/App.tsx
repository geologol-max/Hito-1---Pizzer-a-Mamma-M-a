import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Pizza from './pages/Pizza';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { pizzas } from './pizzas';
import { CartItem } from './types';

export default function App() {
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
      <Navbar total={total} />
      
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart cart={cart} increaseCount={increaseCount} decreaseCount={decreaseCount} total={total} />} />
        <Route path="/pizza/p001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      <Footer />
    </div>
  );
}
