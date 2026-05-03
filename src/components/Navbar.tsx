import { Pizza, User, LogIn, UserPlus, LogOut, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  setView?: (view: 'home' | 'cart' | 'register' | 'login') => void;
  total: number;
}

const Navbar = ({ setView, total }: NavbarProps) => {
  const token = false;

  const formatCurrency = (value: number) => {
    return value.toLocaleString('es-CL');
  };

  return (
    <nav className="bg-slate-900 text-white h-16 px-8 flex items-center justify-between shadow-md z-50 sticky top-0 font-sans">
      <div className="flex items-center space-x-6">
        <span 
          className="text-xl font-bold tracking-tight text-orange-500 cursor-pointer"
          onClick={() => setView?.('home')}
        >
          🍕 Pizzería Mamma Mía!
        </span>
        <div className="flex space-x-2">
          <button 
            onClick={() => setView?.('home')}
            className="px-4 py-1.5 rounded-md text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <Pizza size={16} /> Home
          </button>
          
          {token ? (
            <>
              <button 
                onClick={() => setView?.('home')}
                className="px-4 py-1.5 rounded-md text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <User size={16} /> Profile
              </button>
              <button 
                className="px-4 py-1.5 rounded-md text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => setView?.('login')}
                className="px-4 py-1.5 rounded-md text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <LogIn size={16} /> Login
              </button>
              <button 
                onClick={() => setView?.('register')}
                className="px-4 py-1.5 rounded-md text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <UserPlus size={16} /> Register
              </button>
            </>
          )}
        </div>
      </div>

      <div>
        <button 
          onClick={() => setView?.('cart')}
          className="bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 transition-transform active:scale-95 cursor-pointer"
        >
          <ShoppingCart size={18} /> Total: ${formatCurrency(total)}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
