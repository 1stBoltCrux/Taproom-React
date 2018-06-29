import React from 'react';
import './header.css';
import logo from './../assets/images/logo.png'

export default function Header(){
  return(
    <div className='header-wrapper'>
      <div className='header-logo'>
        <img src={logo}/>
      </div>
      <div className='header-links'>
        <ul>
          <li>View Our Selection</li>
          <li>Add a New Keg</li>
        </ul>
      </div>

    </div>
  )
}
