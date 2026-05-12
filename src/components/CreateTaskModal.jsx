import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CreateTaskModal = ({ isOpen, onClose, onSave, initialStatus }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState(initialStatus || 'todo');
  const [tag, setTag] = useState('bg-blue-400');

  const tags = [
    { color: 'bg-blue-400', label: 'Azul' },
    { color: 'bg-green-500', label: 'Verde' },
    { color: 'bg-pink-500', label: 'Rosa' },
    { color: 'bg-orange-400', label: 'Naranja' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: `t${Date.now()}`,
      title,
      description,
      status,
      tags: [{ color: tag, label: 'etiqueta' }],
      assignees: [
        { id: 'u1', initials: 'VH', color: 'bg-blue-600' } // Default mock user
      ]
    };

    onSave(newTask);
    setTitle('');
    setDescription('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        ></motion.div>

        {/* Modal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-2xl shadow-xl w-full max-w-md relative z-10 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">Crear nueva tarea</h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ej. Diseño de la base de datos" 
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Descripción</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Detalles de la tarea..." 
                rows="3"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estado</label>
                <select 
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="todo">Por hacer</option>
                  <option value="in-progress">En proceso</option>
                  <option value="done">Terminadas</option>
                  <option value="past">Pasadas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Etiqueta de color</label>
                <div className="flex space-x-2 mt-2">
                  {tags.map((t) => (
                    <button
                      key={t.color}
                      type="button"
                      onClick={() => setTag(t.color)}
                      className={`w-6 h-6 rounded-full ${t.color} border-2 ${tag === t.color ? 'border-gray-600 scale-110' : 'border-transparent hover:scale-110'} transition-all`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 flex space-x-3">
              <button 
                type="button" 
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md"
              >
                Crear Tarea
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CreateTaskModal;
