import { useContext } from 'react';
import { User, LogOut, Mail } from 'lucide-react';
import { UserContext } from '../context/UserContext';

const Profile = () => {
  const userCtx = useContext(UserContext);
  const logout = userCtx ? userCtx.logout : () => {};
  const email = userCtx ? userCtx.email : "geologol@gmail.com";

  return (
    <div className="flex-1 bg-slate-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 max-w-sm w-full text-center">
        <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <User className="text-orange-500" size={48} />
        </div>
        
        <h2 className="text-2xl font-extrabold text-slate-800 mb-2 italic">Tu Perfil</h2>
        <p className="text-slate-400 text-xs uppercase tracking-widest font-bold mb-6">Bienvenido de vuelta</p>
        
        <div className="flex items-center justify-center gap-2 bg-slate-50 py-3 px-4 rounded-lg mb-8 border border-slate-100">
          <Mail size={16} className="text-slate-400" />
          <span className="text-slate-600 font-medium">{email}</span>
        </div>

        <button 
          onClick={logout}
          className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 cursor-pointer uppercase text-xs tracking-widest italic"
        >
          Cerrar Sesión <LogOut size={16} />
        </button>
      </div>
    </div>
  );
};

export default Profile;
