import React from 'react';
import { LayoutDashboard, CheckSquare, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col justify-between hidden md:flex">
      <div>
        <div className="p-6 flex items-center space-x-3">
          <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
            <span className="font-bold text-black text-xs">TR</span>
          </div>
          <span className="font-bold text-xl">TaskITR</span>
        </div>
        
        <nav className="mt-6 px-4 space-y-2">
          <a href="#" className="flex items-center space-x-3 text-gray-500 hover:bg-gray-50 px-4 py-3 rounded-xl transition-colors">
            <LayoutDashboard size={20} />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-blue-600 bg-blue-50 px-4 py-3 rounded-xl transition-colors">
            <CheckSquare size={20} />
            <span className="font-medium">Tareas</span>
          </a>
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-100">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center space-x-3 text-gray-500 hover:text-gray-900 px-4 py-3 w-full transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
