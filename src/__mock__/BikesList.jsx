import React from "react"

const BikesList = () => {

    const isLoading = false;
    const isSuccess = true;
    const isError = false;


    const bikes = [
       { id: 1,
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
    }
    
      ]
    

  return (

    <>
      <div className="swiper-button image-swiper-button-next">
      </div>
      <div className="swiper-button image-swiper-button-prev">
      </div>
      {isLoading && <Spiner />}
      {isSuccess &&
        bikes.map((bike) => (
          <p  key={bike.id}>
            <img
              onClick={() => navigate(`/Bikes/${bike.id}`)}
              src={bike.images[Object.keys(bike.images)[0]]}
            ></img>
            <h3>
              {bike.name} {bike.brand}
            </h3>
            <p>
              {" "}
              {bike.description.substring(1, 100)}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => navigate(`/Bikes/${bike.id}`)}
              >
                ...
              </span>
            </p>
          </p>
        ))}
      {isError && error.toString()}
      </>
  );
};

export default BikesList;
