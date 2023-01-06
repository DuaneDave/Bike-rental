import useGetBikesQuery from '../api/apiSlice'
import Spiner from '../spiner/Spiner';

const BikeDetails = () => {


 const {
  data:Bikes,
  isLoading,
  isSuccess,
  isError,
  error
 } = useGetBikesQuery()

  return (
    <>
  {isLoading && <Spiner /> }
  {Bikes && 
  (Bikes.map(bike => (
    <div>
      <img src={bike.images}></img>
    </div>)
  ))
    } 
    </>
  )
}

export default BikeDetails
