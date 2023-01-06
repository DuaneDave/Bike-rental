import ColorSwitch from '../colorSwitch/ColorSwitch'
import { useSelector } from 'react-redux'
import {useState} from 'react';

const Bike = ({bike}) => {

  // const color = useSelector(state => state.colorswitch.color)
  const [color,setColor] = useState(null)
  const changeColor = (input) => {
    setColor(input)
  }

  return (
    <div>
      <img src={ bike.images[color] || bike.images[Object.keys(bike.images)[0]] }></img>
      <h3>{ bike.model }</h3>
      <p> { bike.description }</p>
      <div>
       {bike.colors.map(color => (
          <ColorSwitch  key={color} changeColor={changeColor} input = {color} />
       )) }
      </div>
    </div>
  )
}

export default Bike
