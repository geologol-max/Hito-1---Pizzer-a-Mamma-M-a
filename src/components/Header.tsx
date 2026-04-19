const Header = () => {
  return (
    <header className="relative h-48 bg-slate-800 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Background Image with referrerPolicy fix */}
      <img 
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1200" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-slate-900/60"></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-white mb-2 uppercase tracking-widest italic">
          Pizzería Mamma Mía!
        </h1>
        <p className="text-slate-200 text-lg max-w-2xl font-light italic">
          ¡Tenemos las mejores pizzas que podrás encontrar!
        </p>
        <div className="mt-3 h-1 w-24 bg-orange-500 mx-auto rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
