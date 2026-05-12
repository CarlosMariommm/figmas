import React from 'react';
import { Trash2 } from 'lucide-react';

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-4 hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex justify-between items-start mb-3">
        <div className="flex space-x-1">
          {task.tags.map((tag, idx) => (
            <div key={idx} className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${tag.color}`}></div>
              <span className="text-[10px] text-gray-400">{tag.label}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onDelete(task.id);
            }} 
            className="text-gray-300 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors"
            title="Eliminar tarea"
          >
            <Trash2 size={14} />
          </button>
          <button className="text-gray-400 hover:text-gray-600 px-1">
            <span className="tracking-widest leading-none">...</span>
          </button>
        </div>
      </div>
      
      <h4 className="font-bold text-gray-900 mb-2">{task.title}</h4>
      <p className="text-xs text-gray-500 whitespace-pre-line mb-4 line-clamp-3">
        {task.description}
      </p>
      
      <div className="flex items-center space-x-[-8px]">
        {task.assignees.map((user) => (
          <div 
            key={user.id} 
            className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white ${user.color}`}
          >
            {user.initials}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
