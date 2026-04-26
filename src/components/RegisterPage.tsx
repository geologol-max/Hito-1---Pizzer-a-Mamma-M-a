import { useState, FormEvent } from 'react';
import { UserPlus, AlertCircle, CheckCircle2 } from 'lucide-react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError('');

    // Validations
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      setError('Todos los campos son obligatorios.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Success logic
    setSuccess(true);
    // Reset form optionally or keep it for feedback
    // setEmail(''); setPassword(''); setConfirmPassword('');
  };

  return (
    <div className="flex-1 flex items-center justify-center p-4 bg-slate-50">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 w-full max-w-md">
        <div className="flex items-center gap-2 mb-6 text-slate-800">
          <UserPlus className="text-orange-500" />
          <h2 className="text-2xl font-bold italic uppercase tracking-wider">Registro</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-800"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-800"
              placeholder="mínimo 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-slate-800"
              placeholder="repite tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-3 flex items-center gap-2 text-red-700 text-sm">
              <AlertCircle size={18} />
              <p>{error}</p>
            </div>
          )}

          {success && (
            <div className="bg-green-50 border-l-4 border-green-500 p-3 flex items-center gap-2 text-green-700 text-sm">
              <CheckCircle2 size={18} />
              <p>¡Registro completado exitosamente!</p>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-md transition-colors shadow-md active:scale-95 cursor-pointer uppercase tracking-widest text-sm italic"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
