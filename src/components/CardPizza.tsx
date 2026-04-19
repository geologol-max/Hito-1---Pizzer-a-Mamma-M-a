import { ShoppingCart, Eye, Pizza } from 'lucide-react';

interface CardPizzaProps {
  name: string;
  price: number;
  ingredients: string[];
  img: string;
}

const CardPizza = ({ name, price, ingredients, img }: CardPizzaProps) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('es-CL');
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm transition-all hover:shadow-md h-full flex flex-col">
      <div className="h-40 bg-slate-200 flex items-center justify-center overflow-hidden">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover" 
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-2">Pizza {name}</h3>
        
        <div className="py-3 flex flex-col items-center flex-1">
          <span className="text-xs text-slate-400 uppercase tracking-widest mb-1">Ingredientes:</span>
          <p className="text-slate-600 text-xs italic text-center">
            🍕 {ingredients.join(', ')}
          </p>
        </div>

        <div className="pt-2 border-t border-slate-100">
          <div className="text-center py-2">
            <span className="text-xl font-bold text-slate-900">${formatCurrency(price)}</span>
          </div>
          
          <div className="flex gap-2 pt-2">
            <button className="flex-1 border border-slate-800 text-slate-800 py-2 rounded-md text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5">
              Ver más <Eye size={14} />
            </button>
            <button className="flex-1 bg-slate-800 text-white py-2 rounded-md text-sm font-semibold hover:bg-slate-900 transition-colors cursor-pointer flex items-center justify-center gap-1.5">
              Añadir <ShoppingCart size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
