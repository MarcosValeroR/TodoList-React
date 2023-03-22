import React from 'react'
import './create-task-form.css'

function CreateTaskForm({handleSubmit, handleChange, task}) {
  return (
    <form className="task-form" onSubmit={handleSubmit}>
    <input
      type="text"
      onChange={handleChange}
      placeholder="Introduce una tarea..."
      value={task}
      className="task-input"
    />
    <button onClick={handleSubmit} className="btn-create">
      Crear
    </button>
  </form>
  )
}

export default CreateTaskForm