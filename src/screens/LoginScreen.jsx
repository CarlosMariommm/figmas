import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO (API): Reemplazar la simulación de abajo por tu llamada real a la API.
    // Ejemplo:
    // try {
    //   const response = await fetch('/api/login', { 
    //     method: 'POST', 
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }) 
    //   });
    //   const data = await response.json();
    //   // Guardar token en localStorage o Context...
    //   navigate('/dashboard');
    // } catch (error) { ... }
    
    // Simulación actual:
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop")' }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      {/* Login Card */}
      <div className="z-10 bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl w-[90%] max-w-md mx-4 lg:mr-[10%] lg:ml-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-sm text-gray-600 mb-1">Bienvenido a LOREM</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Iniciar sesión</h1>
          </div>
          <div className="text-right text-xs text-gray-500">
            <p>¿No tienes cuenta?</p>
            <Link to="/register" className="font-medium text-gray-700 hover:underline">Regístrate</Link>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex space-x-4 mb-8">
          <button className="flex-1 flex items-center justify-center space-x-2 bg-blue-50 text-blue-600 py-3 rounded-xl hover:bg-blue-100 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium">Iniciar sesión con Google</span>
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </button>
          <button className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
             <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 14.363c-.022-2.585 2.115-3.834 2.21-3.89-.12-.176-.176-.255-.176-.255s-1.89-2.673-4.57-2.673c-2.09-.044-3.535 1.135-4.59 1.135-1.044 0-2.488-1.124-4.243-1.101-2.266.022-4.354 1.321-5.521 3.354C-2.915 15.011 1.258 23.111 5.945 23.133c1.133 0 2.066-.755 3.31-.755 1.244 0 1.955.777 3.332.755 4.8-.066 6.332-5.41 6.332-5.41s-.255-.11-.466-.233c-.156-.11-2.066-1.09-2.088-3.127zM11.944 6.81C13.266 5.223 13.9 3.124 13.655 1.1c-1.8.067-3.755 1.189-4.966 2.645-.966 1.166-1.833 3.355-1.577 5.244 1.91.134 3.733-.878 4.832-2.18z"/></svg>
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Ingresa tu usuario o correo electrónico.</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Usuario o correo electrónico" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Ingresa tu contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50/50"
              required
            />
          </div>

          <div className="flex justify-end">
            <a href="#" className="text-xs text-blue-600 hover:underline">Has olvidado tu contraseña</a>
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full md:w-auto md:float-right bg-[#749646] hover:bg-[#62803a] text-white px-8 py-3 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl disabled:opacity-70 flex justify-center items-center"
            >
              {isLoading ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Iniciar sesión'
              )}
            </button>
            <div className="clear-both"></div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default LoginScreen;
