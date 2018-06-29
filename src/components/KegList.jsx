import React from 'react';
import './keglist.css';
import Keg from './Keg.jsx';

export default function KegList(){
  return(
    <div className='keg-list-wrapper'>
      <p>KegList is working.</p>
      <Keg/>
    </div>
  )
}
