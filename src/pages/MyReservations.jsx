import {
  useGetBikesQuery,
  useGetReservationsQuery,
  useDeleteReservationMutation,
} from "../components/api/apiSlice";
import Spiner from "../reusables/spiner/Spinner";
const MyReservations = () => {
  const { data: bikes, isSuccess: Success } = useGetBikesQuery();
  const [deleteres] = useDeleteReservationMutation();
  const {
    data: reservations,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetReservationsQuery();
  console.log(bikes);
  return (
    <div>
      <h1>My Reservations</h1>
      {isLoading && <Spiner />}
      {isSuccess &&
        Success &&
        reservations.map((res) => {
          const bike = bikes.filter((bike) => bike.id === res.bike_id)[0];
          console.log(bike);
          return (
            <div key={res.id}>
              <img
                src={bike.images[Object.keys(bike.images)[0]]}
                style={{ width: "100px" }}
              ></img>
              <p>Bike: {`${bike.name} ${bike.brand}`}</p>
              <p>Reservation date: {res.reservation_date}</p>
              {/* <button onClick={() => deleteres(bike.id)}>Delete</button> */}
            </div>
          );
        })}
      {isFetching && <Spiner />}
    </div>
  );
};

export default MyReservations;
