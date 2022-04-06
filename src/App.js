import './App.css';
import ToDoList from './components/ToDoList';
//import Logo from './components/img/ToDoList.png';
import Logo from './components/img/ToDoListLogo.png';

function App() {
  return (
   <div className='app-toDoList'>
     
    <div className='container-logo'>
      <img 
      src={Logo}
      className='toDoList-logo' 
      />
    </div>

    <div className='container-list'>
      <h1>My tasks</h1>
      <ToDoList />
    </div>

   </div>
  )
}

export default App;
