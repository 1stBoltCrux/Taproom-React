import React from 'react';
import './addkeg.css';

export default function AddKeg(){
  return(
    <div className='add-keg-wrapper'>
        <div className='keg-card'>
          <h3>Add a New Keg</h3>
          <div className='keg-content'>
            <div className='name-brewer'>
              <ul>
                <li>Beer Name: <input type='text'/></li>
                <li>Brewed by: <input type='text'/></li>
              </ul>
            </div>
            <div className='description-abv'>
              <ul>
                <li>Description:<input type='text'/></li>
                <li>ABV:<input type='text'/></li>
              </ul>
            </div>
            <div className='price-remaining'>
              <ul>
                <li>Price:<input type='text'/></li>
                <li>Total Pints:<input type='text'/></li>
              </ul>
              </div>
          </div>
      <div className='add-keg-button'>
        <p>Add a New Keg</p>
      </div>
    </div>
</div>
  )
}
