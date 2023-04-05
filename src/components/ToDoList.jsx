import React from 'react'

export default function ToDoList({taskList}) {
    console.log(taskList);
    return (
    <div className="">
        <div className="card-body w-50 mb-5">
            <ol className="list-group list-group-numbered text-center" >
                {taskList.map(task => <li key= {task} className='list-group-item'>{task}</li>)}
            </ol>
        </div>
    </div>
        
        
    )
}



