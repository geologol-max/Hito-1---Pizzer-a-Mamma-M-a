import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex-1 bg-slate-50 flex flex-col items-center justify-center p-8 text-center">
      <div className="max-w-md">
        <h1 className="text-9xl font-black text-slate-200 mb-4 transform -rotate-12 italic">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mb-4 italic">¡Oh no! Perdimos tu pizza...</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          La página que buscas parece que se la comió el repartidor. No te preocupes, el horno sigue caliente en el catálogo principal.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-transform active:scale-95 shadow-lg uppercase text-sm tracking-widest italic"
        >
          <Home size={18} /> Volver al Inicio
        </Link>
      </div>
      
      {/* Decorative pizza slices */}
      <div className="mt-12 flex gap-4 opacity-20">
        <span className="text-6xl grayscale">🍕</span>
        <span className="text-6xl scale-x-[-1] grayscale">🍕</span>
      </div>
    </div>
  );
};

export default NotFound;
