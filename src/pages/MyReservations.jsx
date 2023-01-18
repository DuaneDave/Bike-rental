import {
  useGetBikesQuery,
  useGetReservationsQuery,
} from "../components/api/apiSlice";

import Spiner from "../reusables/spiner/Spinner";
import ReservationCard from "../components/my_reservation/ReservationCard";

const MyReservations = () => {
  const { data: bikes, isSuccess: success } = useGetBikesQuery();

  const {
    data: reservations,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetReservationsQuery();
  return (
    <>
      {isLoading && <Spiner />}
      {isSuccess && success && (
        <ReservationCard reservations={reservations} bikes={bikes} />
      )}
      {isFetching && <Spiner />}
    </>
  );
};

export default MyReservations;
