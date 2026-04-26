import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';

export default function App() {
  const [view, setView] = useState<'home' | 'register' | 'login'>('home');

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-gray-50">
      <Navbar />
      
      {/* 
          As per Hito 2, we can switch views manually or via buttons.
          For testing purposes, I've kept them conditional.
      */}
      {view === 'home' && <Home />}
      {view === 'register' && <RegisterPage />}
      {view === 'login' && <LoginPage />}

      {/* Temporary Switcher for Hito 2 Evaluation */}
      <div className="fixed bottom-20 right-4 flex flex-col gap-2 z-50">
        <button 
          onClick={() => setView('home')} 
          className="bg-slate-800 text-white text-xs px-3 py-1 rounded-full opacity-70 hover:opacity-100 cursor-pointer"
        >
          View Home
        </button>
        <button 
          onClick={() => setView('register')} 
          className="bg-slate-800 text-white text-xs px-3 py-1 rounded-full opacity-70 hover:opacity-100 cursor-pointer"
        >
          View Register
        </button>
        <button 
          onClick={() => setView('login')} 
          className="bg-slate-800 text-white text-xs px-3 py-1 rounded-full opacity-70 hover:opacity-100 cursor-pointer"
        >
          View Login
        </button>
      </div>

      <Footer />
    </div>
  );
}
