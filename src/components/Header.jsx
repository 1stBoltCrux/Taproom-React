import React from 'react';
import './header.css';
import logo from './../assets/images/logo.png'
import {Link} from 'react-router-dom';

export default function Header(){
  return(
    <div className='header-wrapper'>
      <div className='header-logo'>
        <img src={logo}/>
      </div>
      <div className='header-links'>
        <ul>
          <Link to='/keglist'><li>View Our Selection</li></Link>
          <Link to='/addkeg'><li>Add a New Keg</li></Link>
        </ul>
      </div>

    </div>
  )
}
