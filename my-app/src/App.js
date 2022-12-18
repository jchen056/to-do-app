import Header from './components/Header'
import Tasks from './components/Tasks'
import React from 'react'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const name="Brad";
  const [showAddTask,setShowAddTask]=useState(false)

  const [tasks,setTasks]=useState(
    [
        {id:1,text: 'Cal HW1',dueDate:'Sept 5th at 11:59pm',reminder: true,},
        {id:2,text:'CS Sliding Window Problem Set',dueDate:'Oct 1st at 2:00pm', reminder:false},
        {id:3, text:'TBP Eboard Meeting',dueDate:'Aug 27th at 1:00pm',reminder:true,}
    ]
    )
  // add task
  const addTask=(task)=>{
    const id=Math.floor(Math.random()*1000)+1
    const newTask={id,...task}
    setTasks([...tasks,newTask])
  }
  //delete tasks
  const deleteTask=(id)=>{
    //console.log('delete',id)
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  //toggle reminder
  const toggleReminder=(id)=>{
    //console.log(id)
   
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )

  }
  return (
    
    //please only return one single element
    //think of your UI as a container of many components
    <div className="container">
      
      
      <Header title="ok" onAdd={()=>setShowAddTask
        (!showAddTask)} 
        showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length>0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> 
      : 'No Tasks to Show'}
      
    </div>
  );
}

//you can also use classes instead of functions
// class App extends React.Component{
//   render(){
//     return <h1>Hello World</h1>
//   } 
// }
export default App;
