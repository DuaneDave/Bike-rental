import UseChange from '../hooks/UseChange';

import Container from '../reusables/container/Container';
import Input, { Select } from '../reusables/inputFields/Inputs';

const now = new Date();
const today = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
const user = JSON.parse(localStorage.getItem('user'));

const data = [
  {
    id: 1,
    bike_id: 1,
    name: 'bike 1',
    user_id: 1,
    reservation_date: today,
    due_date: today,
  },
  {
    id: 2,
    name: 'bike 2',
    bike_id: 2,
    user_id: 2,
    reservation_date: today,
    due_date: today,
  },
  {
    id: 3,
    name: 'bike 3',
    bike_id: 3,
    user_id: 3,
    reservation_date: today,
    due_date: today,
  },
];

function Reservations() {
  const [reservationDate, handleReservationDateChange] = UseChange(today);
  const [dueDate, handleDueDateChange] = UseChange(today);
  const [bike, handleBikeChange] = UseChange('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      reservation_date: reservationDate,
      due_date: dueDate,
      bike_id: bike,
    };
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
          <Select label={'Bike'} onChange={(e) => handleBikeChange(e)}>
            {data.map((bike) => (
              <option key={bike.id}>{bike.name}</option>
            ))}
          </Select>

          <button type='submit'>Submit</button>
        </form>
      </div>
    </Container>
  );
}

export default Reservations;
