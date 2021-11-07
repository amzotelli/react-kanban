import React from "react";
import propTypes from "prop-types";

import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-icon.svg";

import "./tasklist.css";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpdate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("New Task", taskState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpdate={onTaskUpdate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Empty List</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="sinal de mais" />
          Add Task
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: propTypes.string.isRequired,
  onAddTask: propTypes.func.isRequired,
  tasks: propTypes.array.isRequired
};
