import React from 'react'
import TaskInfo from '../TaskInfo/TaskInfo';

function TaskContainer({taskList, onDelete, onUpdate, changeState}) {
    
  return (
    taskList.map((task) => (
        <TaskInfo key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} changeState={changeState}/>
    )
  ))
}

export default TaskContainer