import React, { useState } from "react";
import "./task-info.css";
import ElementInfo from "../ElementInfo/ElementInfo";
import FormEdit from "../FormEdit/FormEdit";

function TaskInfo({ task, onDelete, onUpdate, changeState }) {
  const [isEdit, setIsEdit] = useState(false);

  function handleEdit(value) {
    setIsEdit(value)
  }

  return (
    <div className="tasks-container">
      {isEdit ? <FormEdit task={task} onUpdate={onUpdate} handleEdit={handleEdit} onDelete={onDelete} changeState={changeState}/> : <ElementInfo task={task} handleEdit={handleEdit} onDelete={onDelete} changeState={changeState}/>}
    </div>
  );
}

export default TaskInfo;
