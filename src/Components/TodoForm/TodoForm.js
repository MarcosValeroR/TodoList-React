import React, { useState } from "react";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";
import SearchTaskForm from "../SearchTaskForm/SearchTaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import "./todo-form.css";

function TodoForm() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  //Busqueda
  const [taskSearch, setTaskSearch] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  const [searchList, setSearchList] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const tmp = [...taskList];
    if (task !== "") {
      const newTask = {
        id: taskList.length,
        title: task,
        estado: "incompleto",
      };
      tmp.push(newTask);
      setTaskList(tmp);
      setTask("");
      setIsSearch(false);
    } else {
      window.alert("No se puede crear una tarea vacía");
    }
  }

  function handleClickDelete(id) {
    const temp = taskList.filter((task) => task.id !== id);
    const searchTemp = searchList.filter((task) => task.id !== id);

    setTaskList(temp);
    setSearchList(searchTemp);
    setIsSearch(false);
  }

  function handleClickUpdate(id, value) {
    const temp = [...taskList];
    const element = temp.find((task) => task.id === id);
    element.title = value;
    setTaskList(temp);
    setSearchList([element]);
    setIsSearch(false);
  }

  function handleSubmitSearch(e) {
    e.preventDefault();
    const newList = [];
    if (taskSearch === "") {
      setSearchList(taskList);
    } else {
      taskList.map((task) => {
        if (task.title.toLowerCase().includes(taskSearch)) {
          newList.push(task);
        }
        setSearchList(newList);
      });
    }
    // const temp = taskList.filter((task) => task.title === taskSearch);
    // setSearchList(temp);
    setTaskSearch("");
    setIsSearch(true);
  }

  function handleChangeSearch(e) {
    setTaskSearch(e.target.value);
  }

  function changeState(task, state) {
    const temp = [...taskList];
    const element = temp.find((tarea) => tarea.title === task.title);
    element.estado = state;
    setTaskList(temp);
  }
  return (
    <div className="container">
      <h1>TO DO LIST</h1>
      <CreateTaskForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        task={task}
      />
      <SearchTaskForm
        handleSubmitSearch={handleSubmitSearch}
        handleChangeSearch={handleChangeSearch}
        taskSearch={taskSearch}
      />
      {isSearch ? (
        <TaskContainer
          taskList={searchList}
          onUpdate={handleClickUpdate}
          onDelete={handleClickDelete}
          changeState={changeState}
        />
      ) : (
        <TaskContainer
          taskList={taskList}
          onUpdate={handleClickUpdate}
          onDelete={handleClickDelete}
          changeState={changeState}
        />
      )}
    </div>
  );
}

export default TodoForm;
