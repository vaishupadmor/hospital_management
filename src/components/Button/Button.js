import React from 'react'
import "./Button.css"

function Button({ButtonName}) {
  return (
    <div>
        
        <button className='button'> {ButtonName}</button>
    </div>
  )
}

export default Button