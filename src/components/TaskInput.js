import React from 'react';
import './TaskInput.css';

const TaskInput = ({ task, setTask, handleAddTask }) => {
  return (
    <div className="task-input-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Escribe una tarea"
        className="task-input"
      />
      <button onClick={handleAddTask} className="add-task-button">Agregar</button>
    </div>
  );
};

export default TaskInput;