import React, { useState } from "react";
import StateButtons from "../StateButtons/StateButtons";
import "./task-info.css";

function TaskInfo({ task, onDelete, onUpdate, changeState }) {
  const [isEdit, setIsEdit] = useState(false);

  function ElementInfo() {
    return (
      <div className="task-info">
        <span>{task.title}</span>
        <button className="btn-edit" onClick={() => setIsEdit(true)}>
          Editar
        </button>
        <button className="btn-delete" onClick={(e) => onDelete(task.id)}>
          Eliminar
        </button>
        <StateButtons changeState={changeState} task={task}/>
      </div>
    );
  }

  function FormEdit() {
    const [newTitle, setNewTitle] = useState(task.title);

    function handleSubmitUpdate(e) {
      e.preventDefault();
    }

    function handleChangeUpdate(e) {
      setNewTitle(e.target.value);
    }

    function handleClickUpdate() {
      onUpdate(task.id, newTitle);
      setIsEdit(false);
    }
    return (
      <form className="task-info" onSubmit={handleSubmitUpdate}>
        <input type="text" value={newTitle} onChange={handleChangeUpdate} />
        <button className="btn-edit" onClick={handleClickUpdate}>
          Editar
        </button>
        <button className="btn-delete" onClick={(e) => onDelete(task.id)}>
          Eliminar
        </button>
        <StateButtons changeState={changeState} task={task}/>
      </form>
    );
  }

  return (
    <div className="tasks-container">
      {isEdit ? <FormEdit /> : <ElementInfo />}
    </div>
  );
}

export default TaskInfo;
