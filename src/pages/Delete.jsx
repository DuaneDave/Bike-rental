import Spiner from "../reusables/spiner/Spinner";
import { useGetBikesQuery } from "../components/api/apiSlice";
import { useDeleteBikeMutation } from "../components/api/apiSlice";
import { useState } from "react";
import Modal from "../reusables/notifications/modal/Modal";
const Delete = () => {
  const [deleteBike] = useDeleteBikeMutation();

  const {
    data: Bikes,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetBikesQuery();

  return (
    <>
      <div>
        <h1>All Bikes</h1>
        {isLoading && <Spiner />}
        {isError && error}
        {isSuccess &&
          Bikes.map((bike) => (
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
          ))}
        {isFetching && <Spiner />}
      </div>
    </>
  );
};

export default Delete;
