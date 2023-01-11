import Spiner from "../reusables/spiner/Spinner";
import { useGetBikesQuery } from "../components/api/apiSlice";
import { useDeleteBikeMutation } from "../components/api/apiSlice";

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
    <div>
      <h1>All Bikes</h1>
      {isLoading && <Spiner />}
      {isError && error}
      {isSuccess &&
        Bikes.map((bike) => (
          <div key={bike.id}>
            <h2>{bike.name}</h2>
            <button onClick={() => deleteBike(bike.id)}>detele</button>
          </div>
        ))}
      {isFetching && <Spiner />}
    </div>
  );
};

export default Delete;
