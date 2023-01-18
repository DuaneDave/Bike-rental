import styles from "./ReservationCard.module.css";

function ReservationCard({ reservations, bikes }) {
  return (
    <section className={styles.wrapper + " flex flex-column center"}>
      <div className={styles.cardContainer + " grid gap"}>
        {reservations.map((reservation) => {
          const bike = bikes.filter(
            (bike) => bike.id === reservation.bike_id
          )[0];
          return (
            <div
              className={styles.card + " flex flex-column gap"}
              key={reservation.id}
            >
              <img src={bike.images[Object.keys(bike.images)[0]]} />
              <div className={styles.cardDetails + " flex flex-column"}>
                <h3 className="flex">
                  Bike Name:
                  <span>
                    {bike.name}
                    {bike.brand}
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
  );
}

export default ReservationCard;
