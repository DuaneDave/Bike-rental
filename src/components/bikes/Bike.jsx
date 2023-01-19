import ColorSwitch from "../colorSwitch/ColorSwitch";
import { useState } from "react";
import Size from "./Size/Size";
import { useNavigate } from "react-router-dom";

import styles from "./Bike.module.css";

const Bike = ({ bike }) => {
  const [color, setColor] = useState(null);
  const [showdetails, setShowDetails] = useState(false);
  const changeColor = (input) => setColor(input);

  const navigate = useNavigate();

  return (
    <section className={styles.detailsContainer + " flex center"}>
      <div className="grid">
        <div className={styles.detailMain}>
          <img
            onClick={() => navigate(`/bikes/${bike.id}`)}
            src={bike.images[color] || bike.images[Object.keys(bike.images)[0]]}
          />
          <span>{bike.description}</span>
        </div>
        <div className={styles.detailSide + " flex flex-column"}>
          <h2>
            <strong>{bike.name}</strong>
          </h2>
          <div>
            <span className="flex gap">
              <p>Type</p> {bike.bike_type}
            </span>
            <span className="flex gap">
              <p>Model</p> {bike.brand}
            </span>
            <span className="flex gap">
              <p>Price</p> ${bike.daily_rate}
            </span>
            <span className="flex gap">
              <p>Duration</p> 9 Months
            </span>
          </div>
          <h3>
            <strong>6.7% APR</strong> Representative
          </h3>
          <Size />
          <div className="flex gap">
            {bike.color.map((color) => (
              <ColorSwitch
                key={color}
                changeColor={changeColor}
                displayColor={color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bike;
