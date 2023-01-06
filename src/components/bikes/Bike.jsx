import ColorSwitch from '../colorSwitch/ColorSwitch'
import {useState} from 'react';
import Size from './Size/Size';

const Bike = ({bike}) => {

  const [color,setColor] = useState(null)
  const [showdetails, setShowDetails] = useState(false)
  const changeColor = (input) => setColor(input)
  const toggleDetails = () =>  setShowDetails(!showdetails)
  

  return (
    <div onClick={toggleDetails}>
      <img src={ bike.images[color] || bike.images[Object.keys(bike.images)[0]] }></img>
      <h3>{ bike.model }</h3>
      <p> { bike.description }</p>
      {showdetails && ( <Size/>
        
      )}
      <div>
       {bike.colors.map(color => (
          <ColorSwitch  key={color} changeColor={changeColor} input = {color} />
       )) }
      </div>
    </div>
  )
}

export default Bike
