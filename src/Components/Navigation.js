import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <>
      <div className='Form_Mid_button'>
        <Link className='Form_Mid_Button_Left' to="/">Fill Details</Link>
        <Link className='Form_Mid_Button_Right' to="/table">Details</Link>
      </div>
    </>
  )
}

export default Navigation