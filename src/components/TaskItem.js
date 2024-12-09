// TaskItem.js
import React from 'react';

const TaskItem = ({ task, handleDeleteTask }) => {
  return (
    <div className="task-item">
      <span>{task.name}</span>
      <button onClick={() => handleDeleteTask(task.id)}>Eliminar</button>
    </div>
  );
};

export default TaskItem;
