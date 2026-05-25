import { useContext } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { PizzaContext } from '../context/PizzaContext';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const pizzaCtx = useContext(PizzaContext);
  const cartCtx = useContext(CartContext);

  const pizzas = pizzaCtx ? pizzaCtx.pizzas : [];
  const loading = pizzaCtx ? pizzaCtx.loading : false;
  const error = pizzaCtx ? pizzaCtx.error : null;
  const addToCart = cartCtx ? cartCtx.addToCart : () => {};

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-50 min-h-[400px]">
        <p className="text-slate-400 italic animate-pulse">Cargando deliciosas pizzas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 min-h-[400px] p-8">
        <p className="text-red-500 font-semibold mb-4">Error: {error}</p>
        <button 
          onClick={() => pizzaCtx?.fetchPizzas()} 
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-colors cursor-pointer"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <main className="flex-1 bg-slate-50 pb-12">
      <Header />
      
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            onAdd={(id) => {
              const selectedPizza = pizzas.find((p) => p.id === id);
              if (selectedPizza) {
                addToCart(selectedPizza);
              }
            }}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
