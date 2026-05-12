import React from 'react';
import TaskCard from './TaskCard';

const KanbanColumn = ({ title, status, tasks, onAddTask, onDeleteTask }) => {
  const columnTasks = tasks.filter(t => t.status === status);
  
  return (
    <div className="flex-1 min-w-[280px] bg-gray-50 rounded-2xl p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4 px-1">
        <h3 className="font-bold text-gray-800">{title}</h3>
        <div className="flex space-x-2 text-gray-400">
          <button onClick={onAddTask} className="hover:text-gray-600 w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors">+</button>
          <button className="hover:text-gray-600 w-6 h-6 flex items-center justify-center rounded-md hover:bg-gray-200 transition-colors">...</button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin' }}>
        {columnTasks.map(task => (
          <TaskCard key={task.id} task={task} onDelete={onDeleteTask} />
        ))}
        {columnTasks.length === 0 && (
          <div className="text-center text-sm text-gray-400 mt-4 italic border-2 border-dashed border-gray-200 rounded-xl py-4">
            No hay tareas
          </div>
        )}
      </div>
    </div>
  );
};

export default KanbanColumn;
