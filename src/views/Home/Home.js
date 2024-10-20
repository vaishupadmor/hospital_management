import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Button from "../../components/Button/Button"
import { ButtonData,ButtonData2 } from '../../Config/ButtonData'
import  Homeimage from "../../images/homemain-img.jpg"
import { MEDICINEDETAILS } from '../../Config/HomeCardData'
import HomeCard from '../../components/Homecard/HomeCard';

function Home() {

  return (
    
    <div>
      <Navbar/>
    <div className="Homemain-img-container">
    <img src={Homeimage} alt="Homeimg" className="Homemain-img" />
    <div> 
      <span style={{position:"relative" ,bottom:320,left:1050,fontSize:25,fontStyle:'italic' }}> Care you can believe in.</span><br></br>
      <span style={{position:"relative" ,bottom:310,left:1085,fontSize:25,fontStyle:'italic' }}> Choose Wisely.</span>
   {ButtonData.map((But)=>{
    const {ButtonName,id} = But;
    return(
      <div className='ButtonContainer-1'>
      <Button 
      id={id}
      ButtonName={ButtonName} />
   </div> )
   })

   }
    </div>
    </div>
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
    </div>
    
  )
}

export default Home