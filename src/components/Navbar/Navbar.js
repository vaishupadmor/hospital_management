import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import Logo from "../../images/logo.png"


function Navbar() {
  return (
    <div className='Navbar-container'>
      <div className='Logo-image-container'>
        <img src={Logo} alt='logo' className='Logo-image'/>
        <h1> Mauli</h1>
      </div>
      <div className='Links-container'>
        <Link to={"/"} className='Navbar-Links'> Home </Link>
        <Link to={"./about"} className='Navbar-Links'>About Us</Link>
        <Link to={"./contact"} className='Navbar-Links'>Contact Us</Link>
        <Link to={"./store"} className='Navbar-Links'>Store</Link>
        <Link to={"./login"} className='Navbar-Links'>login</Link>
        <Link to={"./signin"} className='Navbar-Links'>Signin</Link>
        </div>
    </div>
  )
}

export default Navbar