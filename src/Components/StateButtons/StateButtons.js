import React from "react";
import './state-buttons.css'

function StateButtons({task,changeState}) {
  return (
    <>
      <button
        className="btn-state"
        onClick={() => {
          changeState(task, "incompleto");
        }}
        style={
          task.estado === "incompleto"
            ? { backgroundColor: "red", color: "white" }
            : {}
        }
      >
        Incompleto
      </button>
      <button
        className="btn-state"
        onClick={() => {
          changeState(task, "in progress");
        }}
        style={
          task.estado === "in progress" ? { backgroundColor: "yellow" } : {}
        }
      >
        En progreso
      </button>
      <button
        className="btn-state"
        onClick={() => {
          changeState(task, "finished");
        }}
        style={
          task.estado === "finished"
            ? { backgroundColor: "green", color: "white" }
            : {}
        }
      >
        Completado
      </button>
    </>
  );
}

export default StateButtons;
