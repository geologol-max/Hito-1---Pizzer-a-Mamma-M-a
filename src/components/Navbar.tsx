import { Link, NavLink } from 'react-router-dom';
import { Pizza, User, LogIn, UserPlus, LogOut, ShoppingCart } from 'lucide-react';

interface NavbarProps {
  total: number;
}

const Navbar = ({ total }: NavbarProps) => {
  const token = false;

  const formatCurrency = (value: number) => {
    return value.toLocaleString('es-CL');
  };

  const setActiveClass = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-1.5 rounded-md text-sm font-medium border transition-colors flex items-center gap-1.5 cursor-pointer ${
      isActive 
        ? 'bg-slate-800 border-orange-500 text-orange-500' 
        : 'border-slate-700 hover:bg-slate-800 text-white'
    }`;

  return (
    <nav className="bg-slate-900 text-white h-16 px-8 flex items-center justify-between shadow-md z-50 sticky top-0 font-sans">
      <div className="flex items-center space-x-6">
        <Link 
          to="/"
          className="text-xl font-bold tracking-tight text-orange-500 hover:text-orange-400 transition-colors cursor-pointer"
        >
          🍕 Pizzería Mamma Mía!
        </Link>
        <div className="flex space-x-2">
          <NavLink to="/" className={setActiveClass}>
            <Pizza size={16} /> Home
          </NavLink>
          
          {token ? (
            <>
              <NavLink to="/profile" className={setActiveClass}>
                <User size={16} /> Profile
              </NavLink>
              <button 
                className="px-4 py-1.5 rounded-md text-sm font-medium border border-slate-700 hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer text-white"
              >
                <LogOut size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className={setActiveClass}>
                <LogIn size={16} /> Login
              </NavLink>
              <NavLink to="/register" className={setActiveClass}>
                <UserPlus size={16} /> Register
              </NavLink>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center">
        <Link 
          to="/cart"
          className="bg-orange-600 hover:bg-orange-700 px-5 py-2 rounded-full font-bold text-sm shadow-lg flex items-center gap-2 transition-transform active:scale-95 cursor-pointer no-underline text-white"
        >
          <ShoppingCart size={18} /> Total: ${formatCurrency(total)}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
