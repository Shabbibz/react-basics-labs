import React from 'react';

const Task = (props) => {

    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title">{props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="description"> {props.description}</p>
            <p className="priority"> Priority Level: {props.priority}</p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>

            </div>
    )



}

<div className="container">
<h1>Tasky</h1>
{taskState.tasks.map((task, index) => (              
  <Task 
    title={task.title}
    description={task.description}
    deadline={task.deadline}
    key={task.id}
    done={task.done}
    markDone={() => doneHandler(index)}
    deleteTask = {() => deleteHandler(index)}
  />
))}
<AddTaskForm />
</div>



export default Task;
