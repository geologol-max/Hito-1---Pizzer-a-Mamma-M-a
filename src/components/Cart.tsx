import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  setView?: (view: 'home' | 'cart' | 'register' | 'login') => void;
  cart: CartItem[];
  increaseCount: (id: string) => void;
  decreaseCount: (id: string) => void;
  total: number;
}

const Cart = ({ setView, cart, increaseCount, decreaseCount, total }: CartProps) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('es-CL');
  };

  return (
    <div className="flex-1 bg-slate-50 p-8 flex flex-col items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 w-full max-w-2xl">
        <h2 className="text-2xl font-bold italic uppercase tracking-wider text-slate-800 mb-6 flex items-center gap-2">
          <ShoppingCart className="text-orange-500" /> Detalles del pedido:
        </h2>

        {cart.length > 0 ? (
          <div className="space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-4">
                  <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md shadow-sm" />
                  <div>
                    <h3 className="font-bold text-slate-800 capitalize">Pizza {item.name}</h3>
                    <p className="text-slate-500 text-sm font-medium">${formatCurrency(item.price)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => decreaseCount(item.id)}
                    className="p-1 rounded-md border border-red-500 text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="font-bold text-slate-800 w-6 text-center">{item.count}</span>
                  <button 
                    onClick={() => increaseCount(item.id)}
                    className="p-1 rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors cursor-pointer"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            ))}

            <div className="pt-4 mt-4 text-left">
              <h3 className="text-3xl font-extrabold text-slate-900 mb-6 italic">
                Total: ${formatCurrency(total)}
              </h3>
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-md transition-colors shadow-md active:scale-95 cursor-pointer uppercase tracking-widest text-sm italic">
                Pagar
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400 italic mb-4 text-lg">Tu carrito está vacío</p>
            <button 
              onClick={() => setView?.('home')}
              className="text-orange-500 font-bold hover:underline cursor-pointer"
            >
              Ir a ver pizzas
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
