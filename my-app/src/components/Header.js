import React from 'react'
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {
  // const onClick=()=>{
  //   console.log('Click')
  // }
  return (
    <header className='header'>
        <h1 style={{color:'red',backgroundColor:'black'}}>{title}'s To-Do List</h1>
        <Button color={
          showAdd?'red':'green'} 
          text={showAdd? 'Close' :'Add'} 
          onClick={onAdd}/>
      
    </header>
  )
}

Header.defaultProps={
  title: 'To-Do List',
}


export default Header
