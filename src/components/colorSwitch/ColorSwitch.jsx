import { useDispatch } from "react-redux"
import {colorSwitched} from './colorSwitch';
const ColorSwitch = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(colorSwitched('red'))} >red</button>
      <button onClick={() => dispatch(colorSwitched('yellow'))}>yellow </button>
      <button onClick={() => dispatch(colorSwitched('B&W'))}>B&W</button>
    </div>
  )
}

export default ColorSwitch
