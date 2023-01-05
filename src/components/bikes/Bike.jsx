import React from 'react'

const Bike = ({bike}) => {
  return (
    <div>
      <img src={bike.images}></img>
      <h3>{ bike.model }</h3>
      <p> { bike.description }</p>
    </div>
  )
}

export default Bike
