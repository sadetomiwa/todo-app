import React from 'react'

export default function Taskfield({addTask}) {


  function handleClick(e) {
    e.preventDefault();
    console.log(e);
    const newTask = e.target.task.value;
    addTask(newTask);
    e.target.task.value = '';

  }


  return (
    <form action="" onSubmit={handleClick}>
      <h1 className=''>To-Do List</h1>
      <div className="form w-50">
        {/* <label htmlFor="task">Task</label> */}
        <input className="form-control" type="text" name="task" placeholder='Enter a Task...' />
        <input type="submit" value="Add Task" className='btn btn-outline-danger w-100 mt-3' />
      </div>
    </form>
  )
}
