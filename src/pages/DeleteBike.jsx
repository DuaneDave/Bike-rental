import { useGetBikesQuery } from "../components/api/apiSlice";
import { useDeleteBikeMutation } from "../components/api/apiSlice";
import { useState } from "react";

import Spiner from "../reusables/spiner/Spinner";

import RemoveBike from "../components/deletebike/RemoveBike";

const DeleteBike = () => {
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
      {isLoading || (isFetching && <Spiner />)}
      {isSuccess && <RemoveBike data={Bikes} onRequest={deleteBike} />}
    </>
  );
};

export default DeleteBike;
