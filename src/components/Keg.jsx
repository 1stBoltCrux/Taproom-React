import React from 'react';
import './keg.css';
import SellButton from './SellButton.jsx';
import EditKeg from './EditKeg.jsx';

export default function Keg(){
  return(
    <div className='keg-wrapper'>
      <p>Keg is working.</p>
      <SellButton/>
      <EditKeg/>
    </div>
  )
}
