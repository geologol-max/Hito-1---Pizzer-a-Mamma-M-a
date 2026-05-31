import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { CartProvider } from './context/CartContext.tsx';
import { PizzaProvider } from './context/PizzaContext.tsx';
import { UserProvider } from './context/UserContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PizzaProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
);
