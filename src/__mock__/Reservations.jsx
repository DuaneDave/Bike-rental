import React from 'react';
function ReservationCard() {

    const bike = 
        { id: 1,
         name: "Bike",
         brand: "Brand",
         bike_type: "Type",
         daily_rate: 100,
         description: "Description",
         color: ["red", "blue", "green"],
         images: {
           red: "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
           blue: "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
           green: "https://images.unsplash.com/photo-1610000000000-000000000000?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
         },
     }
     
       
    const reservations = [
        {
            id: 1,
            reservation_date: '2021-01-01',
            due_date: '2021-01-02',
            city: 'Toronto',
            bike_id: 1,
        },
        {
            id: 2,
            reservation_date: '2021-01-01',
            due_date: '2021-01-02',
            city: 'Toronto',
            bike_id: 2,
        }
    ]


    const styles = {
        wrapper: 'ReservationCard__wrapper',
        cardContainer: 'ReservationCard__cardContainer',
        card: 'ReservationCard__card',
        cardDetails: 'ReservationCard__cardDetails',
    };
  return (
    <section className={styles.wrapper + ' flex flex-column center'}>
      <div className={styles.cardContainer + ' grid gap'}>
        {reservations.map((reservation) => {
          return (
            <div className={styles.card + ' flex flex-column gap'} key={reservation.id}>
              <div className={styles.cardDetails + ' flex flex-column'}>
                <h3 className='flex'>
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
