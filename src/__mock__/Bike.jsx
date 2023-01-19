import React, { useState } from "react";


const Bike = () => {

  const [color, setColor] = useState("red");

  const changeColor = (color) => {
    setColor(color);
  };



  const bike = {
    id: 1,
    name: "Bike",
    brand: "Brand",
    bike_type: "Type",
    daily_rate: 100,
    description: "Description",
    color: ["red", "blue", "green"],
    images: {
      red: "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      blue: "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      green: "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },

  };


  const styles = {
    detailSide: "w-50",
  };

  return (
    <section >
      <div className="grid">
        <div >
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
          <div className="flex gap">
            {bike.color.map((color) => (
              <p
                key={color}
                changeColor={changeColor}
                displayColor={color}
              ></p>
            ))}
          </div>
          <button to="/reserve" state={{ id: bike.id }}>
            Reserve
          </button>
        </div>
      </div>
    </section>
  );
};

export default Bike;
