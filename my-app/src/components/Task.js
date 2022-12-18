import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete,onTaggle}) => {
  return (
    <div 
    className={`task ${task.reminder ? 'reminder' :''}`}
    onDoubleClick={()=>onTaggle(task.id)}>
      
        <h3>{task.text}<FaTimes style={{color:'red',cursor:'pointer'}} 
        onClick={()=>onDelete(task.id)} />
        </h3>
        <p>{task.dueDate}</p>
    </div>
  )
}
export default Task