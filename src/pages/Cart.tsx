import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, ShoppingCart, ArrowLeft } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import { UserContext } from '../context/UserContext';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userCtx = useContext(UserContext);

  const cart = cartCtx ? cartCtx.cart : [];
  const increaseCount = cartCtx ? cartCtx.increaseCount : () => {};
  const decreaseCount = cartCtx ? cartCtx.decreaseCount : () => {};
  const total = cartCtx ? cartCtx.total : 0;
  const token = userCtx ? userCtx.token : false;

  const formatCurrency = (value: number) => {
    return value.toLocaleString('es-CL');
  };

  return (
    <div className="flex-1 bg-slate-50 p-8 flex flex-col items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold italic uppercase tracking-wider text-slate-800 flex items-center gap-2">
            <ShoppingCart className="text-orange-500" /> Detalles del pedido:
          </h2>
          <Link to="/" className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-1 text-sm font-bold uppercase italic tracking-widest">
            <ArrowLeft size={16} /> Seguir comprando
          </Link>
        </div>

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
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4 italic">
                Total: ${formatCurrency(total)}
              </h3>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button 
                  disabled={!token}
                  className={`font-bold py-3 px-8 rounded-md transition-all shadow-md uppercase tracking-widest text-sm italic ${
                    token 
                      ? 'bg-slate-900 hover:bg-slate-800 text-white cursor-pointer active:scale-95' 
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed hover:bg-slate-200 select-none shadow-none active:scale-100'
                  }`}
                >
                  Pagar
                </button>
                {!token && (
                  <p className="text-xs text-orange-500 font-semibold italic">
                    ⚠️ Debes <Link to="/login" className="underline font-bold hover:text-orange-600 transition-colors">iniciar sesión</Link> para realizar el pago.
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400 italic mb-4 text-lg">Tu carrito está vacío</p>
            <Link 
              to="/"
              className="text-orange-500 font-bold hover:underline cursor-pointer"
            >
              Ir a ver pizzas
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
