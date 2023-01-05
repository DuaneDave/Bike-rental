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

  let content

  if(isLoading){
   content = <Spiner text="Loading..." />
  } else if(isSuccess){
    content = Bikes.map(bike => <Bike key={bike.id} bike={bike} />)
  } else if(isError){
    <div>{error.toString()}</div>
  }
  console.log(Bikes);

  return (
    <div>
     { content } 
    </div>
  )
}

export default BikeList
