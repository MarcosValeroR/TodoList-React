import React,{useState} from 'react'
import StateButtons from '../StateButtons/StateButtons';

function FormEdit({task, onUpdate, handleEdit, onDelete, changeState}) {
    const [newTitle, setNewTitle] = useState(task.title);

    function handleSubmitUpdate(e) {
      e.preventDefault();
    }

    function handleChangeUpdate(e) {
      setNewTitle(e.target.value);
    }

    function handleClickUpdate() {
      onUpdate(task.id, newTitle);
      handleEdit(false);
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

export default FormEdit