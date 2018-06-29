import React from 'react';
import './keg.css';
import SellButton from './SellButton.jsx';
import EditKeg from './EditKeg.jsx';

export default function Keg(props){
  return(
    <div className='keg-wrapper'>
      <div className='keg-card'>
        <div className='name-brewer'>
          <ul>
            <li>{props.name}</li>
            <li>{props.brewer}</li>
          </ul>
        </div>
        <div className='description-abv'>
          <ul>
            <li>{props.description}</li>
            <li>{props.abv}</li>
          </ul>
        </div>
        <div className='price-remaining'>
          <ul>
            <li>{props.price}</li>
            <li>{props.remaining}</li>
          </ul>
          </div>
        <SellButton/>
        <EditKeg/>
      </div>

    </div>
  )
}
