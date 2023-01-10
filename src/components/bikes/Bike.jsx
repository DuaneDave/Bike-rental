import ColorSwitch from '../colorSwitch/ColorSwitch'
import {useState} from 'react';
import Size from './Size/Size';
import { useParams, Link } from 'react-router-dom';
const Bike = ({bike}) => {
  // const {id} = useParams()
  const [color,setColor] = useState(null)
  const [showdetails, setShowDetails] = useState(false)
  const changeColor = (input) => setColor(input)
  const toggleDetails = () =>  setShowDetails(!showdetails)


  return (
    <div> 
      <img onClick={() => window.location.href = `/Bikes/${bike.id}` } src={ bike.images[color] || bike.images[Object.keys(bike.images)[0]] }></img>
      <h3>{ bike.model }</h3>
      <p> { bike.description }</p>
       <Size/> 
      <div>
       {bike.colors.map(color => (
          <ColorSwitch  key={color} changeColor={changeColor} input = {color} />
       ))}
      </div>
    </div>
  )
}

export default Bike
