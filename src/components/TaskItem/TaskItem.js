import React, { useState } from "react";
import propTypes from "prop-types";

import "./task-item.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpdate,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(event) => setIsEditing(true)}>{editableTitle}</div>
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="To Do">To Do</option>
          <option value="In progress">In progress</option>
          <option value="Done">Done</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  taskState: propTypes.string.isRequired
};
