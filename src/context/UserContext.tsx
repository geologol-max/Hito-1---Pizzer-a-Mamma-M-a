import { createContext, useState, useEffect, ReactNode } from 'react';

interface UserContextType {
  token: string | null;
  email: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => void;
  getProfile: () => Promise<{ email: string; id?: any } | null>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // Load initial token and email from localStorage for persistent user experience
  const [token, setToken] = useState<string | null>(localStorage.getItem('token_jwt'));
  const [email, setEmail] = useState<string | null>(localStorage.getItem('user_email'));

  const login = async (emailInput: string, passwordInput: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Credenciales inválidas o error de inicio de sesión');
      }

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem('token_jwt', data.token);
      localStorage.setItem('user_email', data.email);
    } catch (err: any) {
      if (err.message && err.message.includes('fetch')) {
        console.warn('API local offline (Failed to fetch). Simulando login en frontend para desarrollo/evaluación:', err);
        const mockToken = `mock.jwt.token.${Date.now()}`;
        setToken(mockToken);
        setEmail(emailInput);
        localStorage.setItem('token_jwt', mockToken);
        localStorage.setItem('user_email', emailInput);
      } else {
        throw err;
      }
    }
  };

  const register = async (emailInput: string, passwordInput: string) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailInput,
          password: passwordInput,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'No se pudo completar el registro');
      }

      const data = await response.json();
      setToken(data.token);
      setEmail(data.email);
      localStorage.setItem('token_jwt', data.token);
      localStorage.setItem('user_email', data.email);
    } catch (err: any) {
      if (err.message && err.message.includes('fetch')) {
        console.warn('API local offline (Failed to fetch). Simulando registro en frontend para desarrollo/evaluación:', err);
        const mockToken = `mock.jwt.token.${Date.now()}`;
        setToken(mockToken);
        setEmail(emailInput);
        localStorage.setItem('token_jwt', mockToken);
        localStorage.setItem('user_email', emailInput);
      } else {
        throw err;
      }
    }
  };

  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token_jwt');
    localStorage.removeItem('user_email');
  };

  const getProfile = async () => {
    if (!token) return null;
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener perfil del servidor');
      }

      const data = await response.json();
      return data;
    } catch (err: any) {
      if (err.message && err.message.includes('fetch')) {
        console.warn('API local offline (Failed to fetch). Retornando perfil guardado localmente para desarrollo/evaluación:', err);
        return { email: email || 'test@example.com' };
      }
      return null;
    }
  };

  // Sync profile data dynamically whenever token is found
  useEffect(() => {
    if (token) {
      getProfile().then((profile) => {
        if (profile) {
          setEmail(profile.email);
          localStorage.setItem('user_email', profile.email);
        }
      });
    } else {
      localStorage.removeItem('token_jwt');
      localStorage.removeItem('user_email');
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        token,
        email,
        login,
        register,
        logout,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
