import Bike from '../components/bikes/Bike';
import { useParams } from 'react-router-dom';
import { useGetBikesQuery } from '../components/api/apiSlice';
import Spiner from '../reusables/spiner/Spinner';

const Details = () => {
  const { param } = useParams();

  const {
    data: Bikes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBikesQuery();

  return (
    <div>
      {isLoading && <Spiner />}
      {isError && error.toString}
      {isSuccess && <Bike bike={Bikes.find(({ id }) => id == param)} />}
    </div>
  );
};

export default Details;
