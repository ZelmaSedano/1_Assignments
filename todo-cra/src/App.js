import React from 'react';
import './App.css';
import { useState } from 'react';

function Task({ task, index, completeTask, removeTask }) {
  return (
    <div
      className='task'
      style={{ textDecoration: task.completed ? 'line-through' : '' }}
    >
      {task.title}
      <button onClick={() => completeTask(index)}>Completed</button>
    </div>
  );
}

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Walk dog',
      completed: false,
    },
    {
      title: 'Feed cat',
      completed: false,
    },
  ]);

  const completeTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  return (
    <div className='todo-container'>
      <div className='header'>TODO - ITEMS</div>
      <div className='tasks'>
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
