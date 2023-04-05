import React, {useState} from 'react'
import Taskfield from '../components/Taskfield'
import ToDoList from '../components/ToDoList'

export default function ToDo() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    console.log(task);
    setTasks([...tasks, task]);
  }


  return (
    <>
      <Taskfield addTask={addTask} />
      <ToDoList taskList={tasks} />
    
    
    
    </>
  )
}
