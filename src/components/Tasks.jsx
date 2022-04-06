import './Style/Task.css';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';

function Task({ id, text, done, taskDone, deleteTask }) {
  return (
   <div className={done ? 'container-tasks done' : 'container-tasks'}>
    <div 
     className="text-task"
     onClick={() => taskDone(id)}>
     {text}
     <div className='task-done'>
       <AiOutlineCheck className="task-done-icon" />  
     </div>
    </div>

    <div 
     className="icons-task"
     onClick={() => deleteTask(id)}>
     <AiOutlineClose  className="delete-icon" />
    </div>
   </div>
  );
}

export default Task;