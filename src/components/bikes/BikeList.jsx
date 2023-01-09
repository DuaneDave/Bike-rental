import Bike from './Bike'
import Spiner from '../spiner/Spiner'
import { useGetBikesQuery } from '../api/apiSlice'
import { Link } from 'react-router-dom'

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
      {isSuccess && Bikes.map(bike => (
      <Bike bike={bike} />
      ))}
      {isError && error.toString()}
    </div>
  )
}

export default BikeList
