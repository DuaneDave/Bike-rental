
const TogButton = ({color,text, onclick}) => {
  return (
    <button onClick={onclick} style={{backgroundColor: color}}>{text}</button>
    ) 
  }

export default TogButton
