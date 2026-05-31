import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Pizza from './pages/Pizza';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { UserContext } from './context/UserContext';

export default function App() {
  const userContext = useContext(UserContext);
  const token = userContext ? userContext.token : false;

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-gray-50">
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={!token ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>

      <Footer />
    </div>
  );
}
