import React from "react";
import './search-task-form.css'

function SearchTaskForm({handleSubmitSearch, handleChangeSearch, taskSearch}) {
  return (
    <form className="task-form" onSubmit={handleSubmitSearch}>
      <input
        className="task-input"
        type="text"
        placeholder="Inserte la tarea buscada..."
        onChange={handleChangeSearch}
        value={taskSearch}
      />
      <button className="btn-search" onClick={handleSubmitSearch}>
        Buscar
      </button>
    </form>
  );
}

export default SearchTaskForm;
