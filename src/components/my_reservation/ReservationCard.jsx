import styles from "./ReservationCard.module.css";
import { useGetReservationsQuery } from "../api/apiSlice";
import Spiner from "../../reusables/spiner/Spinner";

function ReservationCard() {
  const {
    data: reservations,
    isLoading,
    isSuccess,
    isFetching,
  } = useGetReservationsQuery();
  return (
    <>
      {isLoading && <Spiner />}
      {isFetching && <Spiner />}
      {isSuccess && (
        <section className={styles.wrapper + " flex flex-column center"}>
          <div className={styles.cardContainer + " grid gap"}>
            {reservations.map((reservation) => {
              return (
                <div
                  className={styles.card + " flex flex-column gap"}
                  key={reservation.id}
                >
                  <img
                    src={
                      reservation.bike.images[
                        Object.keys(reservation.bike.images)[0]
                      ]
                    }
                  />
                  <div className={styles.cardDetails + " flex flex-column"}>
                    <h3 className="flex">
                      Bike Name:
                      <span>
                        {reservation.bike.name}
                        {reservation.bike.brand}
                      </span>
                    </h3>
                    <span>
                      Reservation date:
                      <span>{reservation.reservation_date}</span>
                    </span>
                    <span>
                      Due date:
                      <span>{reservation.due_date}</span>
                    </span>
                    <span>
                      City of reservation:
                      <span>{reservation.city}</span>
                    </span>
                  </div>

                  <span></span>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

export default ReservationCard;
