import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-gray-50">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
