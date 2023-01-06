import Bike from './Bike'
import Spiner from '../spiner/Spiner'
import { useGetBikesQuery } from '../api/apiSlice'

const BikeList = () => {
  const {
    data:Bikes,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetBikesQuery()

  return (
    <div>
      {isLoading && <Spiner />}
      {isSuccess && Bikes.map(bike => <Bike key={bike.id} bike={bike} />)}
      {isError && error.toString()}
    </div>
  )
}

export default BikeList
