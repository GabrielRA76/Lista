import React from 'react';
import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = ({ tasks, handleDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} handleDeleteTask={handleDeleteTask} />
      ))}
    </div>
  );
};

export default TaskList;