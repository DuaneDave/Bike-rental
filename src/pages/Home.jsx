import React from 'react'
import BikeList from '../components/bikes/BikeList'
import Sidebar from '../components/sideBar/Sidebar'

const Home = () => {
  return (
    <div>
      <Sidebar />
      <BikeList />
    </div>
  )
}

export default Home
