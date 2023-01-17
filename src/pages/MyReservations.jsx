import {
  useGetBikesQuery,
  useGetReservationsQuery,
  useDeleteReservationMutation,
} from "../components/api/apiSlice";
import Spiner from "../reusables/spiner/Spinner";
const MyReservations = () => {
  const [deleteres] = useDeleteReservationMutation();
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
      {isError && error }
      {isSuccess &&
        reservations.map((res) => {
          return (
            <div key={res.id}>
              <img
                src={res.bike.images[Object.keys(res.bike.images)[0]]}
                style={{ width: "100px" }}
              ></img>
              <p>Bike: {`${res.bike.name} ${res.bike.brand}`}</p>
              <p>Reservation date: {res.reservation_date}</p>
              <p>City: {res.city}</p>
              {/* <button onClick={() => deleteres(bike.id)}>Delete</button> */}
            </div>
          );
        })}
      {isFetching && <Spiner />}
    </div>
  );
};

export default MyReservations;
