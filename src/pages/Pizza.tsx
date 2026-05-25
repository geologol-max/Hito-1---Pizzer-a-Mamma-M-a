import { useEffect, useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { PizzaContext } from '../context/PizzaContext';
import { CartContext } from '../context/CartContext';

const Pizza = () => {
  const pizzaCtx = useContext(PizzaContext);
  const cartCtx = useContext(CartContext);

  const pizza = pizzaCtx ? pizzaCtx.pizzaDetails : null;
  const loading = pizzaCtx ? pizzaCtx.loading : false;
  const error = pizzaCtx ? pizzaCtx.error : null;
  const addToCart = cartCtx ? cartCtx.addToCart : () => {};

  useEffect(() => {
    if (pizzaCtx) {
      pizzaCtx.fetchPizzaDetails('p001');
    }
  }, []);

  const formatCurrency = (value: number) => {
    return value.toLocaleString('es-CL');
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-50">
        <p className="text-slate-400 italic animate-pulse">Cargando deliciosa pizza...</p>
      </div>
    );
  }

  if (error || !pizza) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 p-8">
        <p className="text-red-500 font-semibold mb-4">Error: {error || 'No se pudo cargar la pizza'}</p>
        <button 
          onClick={() => pizzaCtx?.fetchPizzaDetails('p001')} 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-slate-50 p-8 flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/2 h-64 md:h-auto">
          <img 
            src={pizza.img} 
            alt={pizza.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-3xl font-extrabold text-slate-800 capitalize italic tracking-tight">
                Pizza {pizza.name}
              </h2>
              <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                Original
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {pizza.desc || "Una deliciosa pizza preparada con los mejores ingredientes seleccionados para brindarte la mejor experiencia italiana en cada bocado."}
            </p>

            <div className="mb-6">
              <header className="text-xs text-slate-400 uppercase tracking-widest mb-2 font-bold flex items-center gap-2">
                <span className="w-8 h-px bg-slate-200"></span> Ingredientes
              </header>
              <ul className="grid grid-cols-2 gap-2">
                {pizza.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-slate-600 text-xs italic flex items-center gap-1.5">
                    <span className="text-orange-500">🍕</span> {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Precio:</p>
              <p className="text-2xl font-black text-slate-900 italic transform -skew-x-6">
                ${formatCurrency(pizza.price)}
              </p>
            </div>

            <div className="flex gap-2">
              <button 
                onClick={() => addToCart(pizza)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-md active:scale-95 flex items-center gap-2 cursor-pointer uppercase text-xs tracking-widest"
              >
                Añadir <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
