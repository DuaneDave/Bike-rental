import { useGetReservationsQuery } from "../components/api/apiSlice";
import Spiner from "../reusables/spiner/Spinner";
const MyReservations = () => {
  const {
    data: reservations,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetReservationsQuery();

  return (
    <div>
      <h1>My Reservations</h1>
      {isLoading && <Spiner />}
      {isSuccess &&
        reservations.map((res) => (
          <div key={res.id}>
            <p>{res.reservation_date}</p>
            <p>{res.bike_id}</p>
          </div>
        ))}
      {isFetching && <Spiner />}
    </div>
  );
};

export default MyReservations;
