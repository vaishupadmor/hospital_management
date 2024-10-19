import React from 'react'
import "./Home.css"
import Button from "../../components/Button/Button"
import { ButtonData } from '../../Config/ButtonData'
import  Homeimage from "../../images/homemain-img.jpg"
import { MEDICINEDETAILS } from '../../Config/HomeCardData'
import HomeCard from '../../components/Homecard/HomeCard';

function Home() {

  return (
    
    <div>
    <div className="Homemain-img-container">
    <img src={Homeimage} alt="Homeimg" className="Homemain-img" />
    <div> 
      <span style={{position:"relative" ,bottom:320,left:1050,fontSize:25,fontStyle:'italic' }}> Care you can believe in.</span><br></br>
      <span style={{position:"relative" ,bottom:310,left:1085,fontSize:25,fontStyle:'italic' }}> Choose Wisely.</span>
   {ButtonData.map((But)=>{
    const {ButtonName} = But;
    return(
      <Button 
      ButtonName={ButtonName}/>
    )
   })

   }
    </div>
    </div>
    <div>
       <h1> Medicens</h1>
     {MEDICINEDETAILS.map((Medicine)=>{
      const {Homeimg , name} = Medicine;
      return (
        
          <HomeCard
          Homeimg={Homeimg}
          name={name}/>
        
      )
     })}
      
    </div>
    </div>
  )
}

export default Home