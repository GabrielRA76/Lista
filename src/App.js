import React, { useState } from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Función para agregar una nueva tarea
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), name: task }]);
      setTask('');
    }
  };

  // Función para eliminar una tarea
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <TaskInput task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <TaskList tasks={tasks} handleDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;