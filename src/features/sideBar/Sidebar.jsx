import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import TogButton  from '../togButton/TogButton'


const Sidebar = () => {
  const toggled = useSelector(state => state.togbutton.toggled)
  
  return (
    <div>
      <TogButton  color={toggled ? "green" : "red"} text = {toggled ? "<<" : ">>"}/><br/>
      <Link to= "/">Brand</Link><br/>
      <Link to = "/reserve">Reserve</Link><br/>
      <Link to= "my-reservations">My reservations</Link><br/>
      <Link to = "/add ">Add a bike</Link><br/>
      <Link to = "/delete ">Remove a bike</Link>
    </div>
  )
}

export default Sidebar
