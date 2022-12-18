import React from 'react'
import Task from './Task'
// const tasks=[
//     {id:1,text: 'Cal HW1',dueDate:'Sept 5th at 11:59pm',reminder: true,},
//     {id:2,text:'CS Sliding Window Problem Set',dueDate:'Oct 1st at 2:00pm', reminder:false},
//     {id:3, text:'TBP Eboard Meeting',dueDate:'Aug 27th at 1:00pm',reminder:true,}
// ]

const Tasks = ({tasks, onDelete,onTaggle}) => {
  return (
    <>
    {tasks.map((task)=>(
      <Task key={task.id} task={task} onDelete={onDelete} onTaggle={onTaggle}/>
    ))}
    </>
  )
}


export default Tasks
