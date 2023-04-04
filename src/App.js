import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Taskfield from './components/Taskfield';
import ToDoList from './components/ToDoList';


export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <Taskfield  addTask={addTask}/>
        <ToDoList taskList={tasks} />

      </div>


    </>
      
  )
}

