import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../pizzas';

interface HomeProps {
  onAddToCart: (id: string) => void;
}

const Home = ({ onAddToCart }: HomeProps) => {
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
            onAdd={onAddToCart}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
