import React from 'react'
import { MEDICINEDETAILS } from '../../Config/HomeCardData';
import { ButtonData2 } from '../../Config/ButtonData';
import HomeCard from '../../components/Homecard/HomeCard';
import Button from '../../components/Button/Button';

function Store() {
  return (
    <div>
       <h1 > Top deals</h1>
       <div className='HomeCard-Component'>
     {MEDICINEDETAILS.map((Medicine)=>{
      const {Homeimg , name,price} = Medicine;
      return (
        
          <HomeCard
          Homeimg={Homeimg}
          name={name}
          price={price}/>
        
      )
     })}
     
     
     </div> 
     <div className='Button-container' >
     {ButtonData2.map((But)=>{
    const {ButtonName,id} = But;
    return(
      
      <Button 
      id={id}
      ButtonName={ButtonName} className='Buttons'/>
      
    )
   })

   }
     </div>
     
   </div>
  )
}

export default Store