import { useState, useEffect } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { Pizza } from '../types';

interface HomeProps {
  onAddToCart: (id: string) => void;
}

const Home = ({ onAddToCart }: HomeProps) => {
  const [pizzas, setPizzas] = useState<Pizza[]>([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

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
