import React, { useState } from "react";
import FormNewTasks from "./form";
import Task from "./Tasks";
import './Style/ToDoList.css';

function ToDoList() {

 const [tasks, setTasks] =  useState([]); 
   
 const newTasks = task => {
  if (task.text.trim()) {
   task.text = task.text.trim();
   const updatedTasks = [task, ...tasks];
   setTasks(updatedTasks);
  }
}

 const deleteThisTask = id => {
   const updatedTasks = tasks.filter(task => task.id !== id);
   setTasks(updatedTasks);
   //  console.log(deleteThisTask);
 }

 const taskComplete = id => {
  const updatedTasks = tasks.map(task => {
    if (task.id === id) {
        task.done = !task.done;
    }
    return task;
});
   setTasks(updatedTasks);
 }


 return (
  <>
   <FormNewTasks onSubmit={newTasks} />

   <div className="container-tasks-form">
     {
     tasks.map((task) =>
      <Task
       key={task.id}
       id={task.id}
       text={task.text}
       done={task.done}
       taskDone={taskComplete}
       deleteTask={deleteThisTask}
      />
     )
     }
   </div>
 </>
 );
}

export default ToDoList;