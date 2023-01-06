import Bike from '../components/bikes/Bike';
import Sidebar from '../components/sideBar/Sidebar';
import { useParams } from 'react-router-dom';
import { useGetBikesQuery } from '../components/api/apiSlice';
import Spiner from '../components/spiner/Spiner';


const Details = () => {
  const {id} = useParams()
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
      {isError && error.toString}
      {isSuccess && <>
        <Sidebar  />
        <Bike bike = { Bikes.find( ({ id }) => id === id )}/>
      </>}
        
        
      
    </div>
  )
}

export default Details
