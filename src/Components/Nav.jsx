import React from 'react'
import './Global.css'
import Logo from './images/Logo.jpeg'

function Nav() {
  return (
    <div className='Nav-div'>
        <div>

            <img className='Logo' src={Logo} alt="" />
        </div>
        <div>
            <h1 className='main-head'>Al Shaba Hajj Tours</h1>
        </div>
    </div>
  )
}

export default Nav