import React from 'react';
import './keg.css';
import SellButton from './SellButton.jsx';
import EditKeg from './EditKeg.jsx';

export default function Keg(props){
  return(
    <div className='keg-wrapper'>
      <div className='keg-card'>
        <div className='keg-content'>
          <div className='name-brewer'>
            <ul>
              <li><span className='emphasis'>{props.name}</span></li>
              <li>Brewed by: <span className='emphasis'>{props.brewer}</span></li>
            </ul>
          </div>
          <div className='description-abv'>
            <ul>
              <li><span className='emphasis'>{props.description}</span></li>
              <li><span className='emphasis'>ABV: {props.abv}</span></li>
            </ul>
          </div>
          <div className='price-remaining'>
            <ul>
              <li><span className='emphasis'>${props.price}</span></li>
              <li><span className='emphasis'>{props.remaining} Pints Remaining</span></li>
            </ul>
            </div>
        </div>
          <div className='keg-buttons'>
            <ul>
              <li><SellButton/></li>
              <li><EditKeg/></li>
            </ul>

          </div>

      </div>

    </div>
  )
}
