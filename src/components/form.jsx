import React, { useState } from "react";
import './Style/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function FormNewTasks(sendTask) {

const [input, setInput] = useState('');

const managementForm = e => {
   setInput(e.target.value);
}

const createNewTask = e => {
  e.preventDefault();

  const createTaskId = {
    id: uuidv4(),
    text: input,
    done: false
  }
  
  sendTask.onSubmit(createTaskId);
}




return (
  <form 
  className="form-task"
  onSubmit={createNewTask}
  >
   <input 
    className="input-task"
    type="text"
    placeholder="Enter with a new taks!"
    name="text"
    onChange={managementForm}
   />

   <button className="button-task">
     Confirm!
   </button>

  </form>
   );
}

export default FormNewTasks;