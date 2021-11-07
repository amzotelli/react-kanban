import React, { useState } from "react";

import NavBar from "./components/NavBar/NavBar";
import TaskList from "./components/TaskList/TaskList";

import "./styles.css";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, state) => {
    const newTask = {
      id: generateId(),
      title,
      state
    };
    setTasks((existingTasks) => {
      return [...existingTasks, newTask];
    });
  };

  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state };
        } else {
          return task;
        }
      });
    });
  };

  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <TaskList
          title="To Do"
          onAddTask={addTask}
          taskState="To Do"
          tasks={tasks.filter((task) => task.state === "To Do")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="In progress"
          onAddTask={addTask}
          taskState="In progress"
          tasks={tasks.filter((task) => task.state === "In progress")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
        <TaskList
          title="Done"
          onAddTask={addTask}
          taskState="Done"
          tasks={tasks.filter((task) => task.state === "Done")}
          onTaskUpdate={updateTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
