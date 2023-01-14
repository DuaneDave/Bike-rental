import { useState } from "react";
import UseChange from "../hooks/UseChange";
import {
  useAddNewReservationMutation,
  useGetBikesQuery,
} from "../components/api/apiSlice";

import sessionStorage from "../helpers/sessions";

import Container from "../reusables/container/Container";
import Input, { Select } from "../reusables/inputFields/Inputs";
import Modal from "../reusables/notifications/modal/Modal";
import Spiner from "../reusables/spiner/Spinner";

const now = new Date();
const today = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;

function Reservations() {
  const [reservationDate, handleReservationDateChange] = UseChange(today);
  const [dueDate, handleDueDateChange] = UseChange(today);
  const [bike, handleBikeChange] = UseChange("");
  const [modal, setModal] = useState({ alert: false, message: "", type: "" });
  const [city, handleCityChange] = UseChange("");

  const [addNewReservation, { isLoading }] = useAddNewReservationMutation();
  const { data: bikes } = useGetBikesQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedBike = bikes.find(
      (each) => each.id === Number(bike.slice(0, 1))
    );

    const userData = sessionStorage("get");

    const data = {
      reservation_date: reservationDate,
      due_date: dueDate,
      bike_id: selectedBike.id,
      user_id: userData.id,
      city,
    };

    addNewReservation(data)
      .unwrap()
      .then(() =>
        setModal({
          alert: true,
          message: `Yay! Your reservation for ${selectedBike.name} has been added successfully`,
          type: "success",
        })
      )
      .catch(() =>
        setModal({
          alert: true,
          message: `Oops! Something went wrong with reseving ${selectedBike.name}, please try again`,
          type: "error",
        })
      );
  };

  return (
    <>
      <Container>
        <div className="form-container flex flex-column">
          <span className="flex flex-column center greeting">
            <h2>Add a new Bike Resevation</h2>
          </span>

          <form onSubmit={handleSubmit} className="flex flex-column">
            <Input
              type={"date"}
              label={"Reservation Date"}
              onChange={(e) => handleReservationDateChange(e)}
              value={reservationDate}
            />

            <Input
              type={"date"}
              label={"Due Date"}
              onChange={(e) => handleDueDateChange(e)}
            />
            <Select label={"Bike"} handleChange={(e) => handleBikeChange(e)}>
              {bikes.map((bike) => (
                <option key={bike.id}>
                  {bike.id}.{bike.name}
                  {bike.brand}
                </option>
              ))}
            </Select>
            <Input
              type={"text"}
              label={"City"}
              onChange={(e) => handleCityChange(e)}
              value={city}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      </Container>
      {modal.alert && (
        <Modal
          type={modal.type}
          message={modal.message}
          onClose={() => setModal({ alert: false, message: "", type: "" })}
        />
      )}
      {isLoading && <Spiner />}
    </>
  );
}

export default Reservations;
