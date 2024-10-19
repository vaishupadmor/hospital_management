import React from 'react'
import "./HomeCard.css"

function HomeCard({Homeimg,name,price,description}) {
  return (
    <div className='HomeCard-container'>
       <img src={Homeimg} alt="Medicineimg" className="HomeCard-image"/>
      <div className="HomeCard-details">
       <h2> Name:{name}</h2>
       <p>{description}</p>
       <p> {price?{price}:null}</p>
       </div>
    </div>
  )
}

export default HomeCard