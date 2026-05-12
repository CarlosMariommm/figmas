/* 
================================================================================
GUÍA DE INTEGRACIÓN DE API (Plantilla)
================================================================================
Este archivo sirve como plantilla de cómo deberías estructurar tus llamadas 
cuando recibas la API real. Solo tendrías que importar estas funciones en tus 
componentes y reemplazar la simulación.

Ejemplo de uso en un componente:
import { login, getTasks } from '../services/api';
================================================================================

const API_URL = 'https://tu-api-real.com/api/v1';

// --- AUTH ---

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) throw new Error('Credenciales incorrectas');
    
    const data = await response.json();
    // Guardar el token para futuras peticiones
    localStorage.setItem('token', data.token); 
    return data;
  } catch (error) {
    console.error('Error en login:', error);
    throw error;
  }
};

export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData), // { email, username, phone, password }
    });

    if (!response.ok) throw new Error('Error al registrar usuario');
    return await response.json();
  } catch (error) {
    console.error('Error en registro:', error);
    throw error;
  }
};

// --- TASKS ---

// Helper para obtener los headers con el token
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

export const getTasks = async () => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      headers: getAuthHeaders()
    });
    if (!response.ok) throw new Error('Error al obtener tareas');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const createTask = async (taskData) => {
  try {
    const response = await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: JSON.stringify(taskData),
    });
    if (!response.ok) throw new Error('Error al crear tarea');
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await fetch(`${API_URL}/tasks/${taskId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (!response.ok) throw new Error('Error al eliminar tarea');
    return true;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
*/
