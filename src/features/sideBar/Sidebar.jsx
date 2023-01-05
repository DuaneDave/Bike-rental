import { Link } from 'react-router-dom'
import TogButton  from '../togButton/TogButton'
import {useState} from 'react'


const Sidebar = () => {
  const [toggled,setToggled ]= useState(false)

  
  return (
    <div>
      <TogButton  onclick = {() => setToggled(!toggled)}color={toggled ? "green" : "red"} text = {toggled ? "<<" : ">>"}/><br/>
      <Link to= "/">Brand</Link><br/>
      <Link to = "/reserve">Reserve</Link><br/>
      <Link to= "my-reservations">My reservations</Link><br/>
      <Link to = "/add ">Add a bike</Link><br/>
      <Link to = "/delete ">Remove a bike</Link>
    </div>
  )
}

export default Sidebar
