import React from 'react'
import StateButtons from '../StateButtons/StateButtons'
import './element-info.css'

function ElementInfo({task,handleEdit,onDelete,changeState}) {
    return (
        <div className="task-info">
          <span>{task.title}</span>
          <button className="btn-edit" onClick={() => handleEdit(true)}>
            Editar
          </button>
          <button className="btn-delete" onClick={(e) => onDelete(task.id)}>
            Eliminar
          </button>
          <StateButtons changeState={changeState} task={task}/>
        </div>

  )

}

export default ElementInfo