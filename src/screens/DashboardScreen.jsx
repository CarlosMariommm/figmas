import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Bell, HelpCircle } from 'lucide-react';
import { mockTasks } from '../data/mockData';
import Sidebar from '../components/Sidebar';
import KanbanColumn from '../components/KanbanColumn';
import CreateTaskModal from '../components/CreateTaskModal';

const DashboardScreen = () => {
  // TODO (API): En lugar de iniciar con mockTasks, el estado inicial debería ser un arreglo vacío [].
  // Luego, usar un useEffect para hacer un GET a la API y cargar las tareas reales del usuario.
  // Ejemplo:
  // useEffect(() => {
  //   fetch('/api/tasks').then(res => res.json()).then(data => setTasks(data));
  // }, []);
  const [tasks, setTasks] = useState(mockTasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [initialStatusForModal, setInitialStatusForModal] = useState('todo');

  const handleOpenModal = (status) => {
    setInitialStatusForModal(status);
    setIsModalOpen(true);
  };

  const handleSaveTask = (newTask) => {
    // TODO (API): Hacer un POST a tu API para crear la tarea en la base de datos antes de actualizar el estado local.
    // Ejemplo:
    // fetch('/api/tasks', { method: 'POST', body: JSON.stringify(newTask) })
    //   .then(res => res.json())
    //   .then(savedTask => setTasks(prevTasks => [savedTask, ...prevTasks]));
    
    // Lógica local actual:
    setTasks(prevTasks => [newTask, ...prevTasks]);
  };

  const handleDeleteTask = (taskId) => {
    // TODO (API): Hacer un DELETE a tu API pasándole el ID de la tarea a eliminar.
    // Ejemplo:
    // fetch(`/api/tasks/${taskId}`, { method: 'DELETE' })
    //   .then(() => setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId)));

    // Lógica local actual:
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="flex h-screen bg-white"
    >
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Topbar */}
        <header className="h-20 border-b border-gray-100 flex items-center justify-between px-8 bg-white z-10">
          <div className="flex items-center w-96 bg-gray-50 rounded-xl px-4 py-2 border border-gray-100">
            <Search size={18} className="text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Buscar" 
              className="bg-transparent border-none focus:outline-none text-sm w-full"
            />
          </div>
          
          <div className="flex items-center space-x-6">
            <button className="text-gray-600 hover:text-gray-900 relative">
              <Bell size={22} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <HelpCircle size={22} />
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden border border-gray-200 cursor-pointer">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="flex-1 overflow-hidden flex flex-col p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Tareas</h1>
            <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-gray-900">
              <span>Esta semana</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
          </div>
          
          {/* Kanban Board */}
          <div className="flex-1 flex space-x-6 overflow-x-auto pb-4">
            <KanbanColumn title="Por hacer" status="todo" tasks={tasks} onAddTask={() => handleOpenModal('todo')} onDeleteTask={handleDeleteTask} />
            <KanbanColumn title="En proceso" status="in-progress" tasks={tasks} onAddTask={() => handleOpenModal('in-progress')} onDeleteTask={handleDeleteTask} />
            <KanbanColumn title="Terminadas" status="done" tasks={tasks} onAddTask={() => handleOpenModal('done')} onDeleteTask={handleDeleteTask} />
            <KanbanColumn title="Pasadas" status="past" tasks={tasks} onAddTask={() => handleOpenModal('past')} onDeleteTask={handleDeleteTask} />
          </div>
        </main>

        <CreateTaskModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onSave={handleSaveTask}
          initialStatus={initialStatusForModal}
        />
      </div>
    </motion.div>
  );
};

export default DashboardScreen;
