import React from 'react'
import "./HomeCard.css"
import Button from '../Button/Button'
import { ButtonData2 } from '../../Config/ButtonData'

function HomeCard({Homeimg,name,price,description}) {
  return (
    <div className='HomeCard-container'>
       <img src={Homeimg} alt="Medicineimg" className="HomeCard-image"/>
      <div className="HomeCard-details">
       <h2 className='HomeCard-name'> {name}</h2>
       <p>{description}</p>
       <p> Price:{price}</p>
       
    </div>
    
    </div>
  )
}

export default HomeCard