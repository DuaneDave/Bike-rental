import { toggle } from "./togButtonSlice"
import  { useDispatch } from 'react-redux'


const TogButton = ({color,text}) => {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(toggle())} style={{backgroundColor: color}}>{text}</button>
    ) 
  }

export default TogButton
