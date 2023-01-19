import styles from "./ColorSwitch.module.css";

function ColorSwitch({ displayColor, changeColor }) {
  let color;
  switch (displayColor) {
    case "red":
      color = "red";
      break;
    case "white":
      color = "white";
      break;
    case "yellow":
      color = "yellow";
      break;
    case "orange":
      color = "orange";
      break;
    case "blue":
      color = "blue";
      break;
    case "green":
      color = "green";
      break;
    default:
      color = "black";
  }

  const style = styles[color];

  return (
      <div
        onClick={() => changeColor(color)}
        className={style + " colorSwitch"}
      ></div>
  );
}

export default ColorSwitch;
