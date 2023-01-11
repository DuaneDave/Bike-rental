import UseChange from '../hooks/UseChange';
import {
  useAddNewReservationMutation,
  useGetBikesQuery,
} from '../components/api/apiSlice';

import sessionStorage from '../helpers/sessions';

import Container from '../reusables/container/Container';
import Input, { Select } from '../reusables/inputFields/Inputs';

const now = new Date();
const today = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
const user = JSON.parse(localStorage.getItem('user'));

function Reservations() {
  const [reservationDate, handleReservationDateChange] = UseChange(today);
  const [dueDate, handleDueDateChange] = UseChange(today);
  const [bike, handleBikeChange] = UseChange('');

  const [addNewReservation] = useAddNewReservationMutation();
  const { data: bikes } = useGetBikesQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedBike = bikes.find(
      (each) => each.id === Number(bike.slice(0, 1))
    );

    const userData = sessionStorage('get');

    const data = {
      reservation_date: reservationDate,
      due_date: dueDate,
      bike_id: selectedBike.id,
      user_id: userData.id,
    };

    addNewReservation(data);
    // .unwrap()
  };

  return (
    <Container>
      <div className='form-container flex flex-column'>
        <span className='flex flex-column center greeting'>
          <h2>Add a new Bike Resevation</h2>
        </span>

        <form onSubmit={handleSubmit} className='flex flex-column'>
          <Input
            type={'date'}
            label={'Reservation Date'}
            onChange={(e) => handleReservationDateChange(e)}
            value={reservationDate}
          />
          <Input
            type={'date'}
            label={'Due Date'}
            onChange={(e) => handleDueDateChange(e)}
          />
          <Select label={'Bike'} handleChange={(e) => handleBikeChange(e)}>
            {bikes.map((bike) => (
              <option key={bike.id}>
                {bike.id}.{bike.name}
              </option>
            ))}
          </Select>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </Container>
  );
}

export default Reservations;
