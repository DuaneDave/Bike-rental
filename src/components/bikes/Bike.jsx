import ColorSwitch from "../colorSwitch/ColorSwitch";
import { useState } from "react";
import Size from "./Size/Size";
import { Link, useNavigate } from "react-router-dom";

import styles from "./Bike.module.css";
import Button from "../../reusables/button/Button";

const Bike = ({ bike }) => {
  const [color, setColor] = useState(null);
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
            <strong>
              {bike.name} {bike.brand}
            </strong>
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
          <Link to="/reserve" state={{ id: bike.id }}>
            Reserve
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Bike;
