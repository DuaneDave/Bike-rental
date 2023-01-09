import { useDispatch } from "react-redux"

const ColorSwitch = ({input, changeColor}) => {
  let color;
  switch(input) {
    case "red":
      color = "red"
      break;
    case "white":
      color =  "white"
      break;
    case "yellow":
      color = "yellow"
      break;
    case "orange":
      color = "orange"
      break;
    case "blue":
      color = "blue"
      break;
    case "green":
      color = "green"
    break;
    default:
      color = "black"
  }  
  return (
      <button style={{backgroundColor:color}} onClick={() => changeColor(color)} >switch</button>
  )
}

export default ColorSwitch
