import React from "react";

function DeleteBike() {
  return (
    <div key={bike.id}>
      <img src={bike.images[Object.keys(bike.images)[0]]}></img>
      <div>
        <h2>
          {bike.name}
          {bike.brand}
        </h2>
        <button onClick={() => deleteBike(bike.id)}>Detele</button>
      </div>
    </div>
  );
}

export default DeleteBike;
