import Spiner from "../components/spiner/Spiner";

const [deleteBike, { isLoading }] = useDeleteBikeMutation();

const Delete = () => {
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
            <button onClick={bike.id}></button>
          </div>
        ))}
    </div>
  );
};

export default Delete;
