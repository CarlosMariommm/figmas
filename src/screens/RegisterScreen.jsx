import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate registration
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
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

      {/* Register Card */}
      <div className="z-10 bg-white/95 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl w-[90%] max-w-md mx-4 lg:mr-[10%] lg:ml-auto">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-sm text-gray-600 mb-1">Bienvenido a LOREM</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Regístrate</h1>
          </div>
          <div className="text-right text-xs text-gray-500">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/" className="font-medium text-gray-700 hover:underline">Iniciar sesión</Link>
          </div>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Ingresa tu usuario o correo electrónico.</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Usuario o correo electrónico" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#749646] focus:border-transparent bg-gray-50/50"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Nombre de usuario</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Nombre de usuario" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#749646] focus:border-transparent bg-gray-50/50"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Número de teléfono</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Número de teléfono" 
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#749646] focus:border-transparent bg-gray-50/50"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Ingresa tu contraseña</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña" 
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#749646] focus:border-transparent bg-gray-50/50"
              required
            />
          </div>

          <div className="pt-4">
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
                'Regístrate'
              )}
            </button>
            <div className="clear-both"></div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default RegisterScreen;
