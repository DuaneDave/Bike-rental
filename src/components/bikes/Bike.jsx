import ColorSwitch from '../colorSwitch/ColorSwitch'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Bike = ({bike}) => {
  // useEffect()
const color = useSelector(state => state.colorswitch.color)
  return (
    <div>
      <img src={ bike.images[color] || bike.images[Object.keys(bike.images)[0]] }></img>
      <h3>{ bike.model }</h3>
      <p> { bike.description }</p>
      <div>
       {bike.colors.map(color => (
          <ColorSwitch key={color}input = {color} />
       )) }
      </div>
    </div>
  )
}

export default Bike
