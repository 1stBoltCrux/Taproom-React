import React from 'react';
import styles from './addkeg.css';
import { v4 } from 'uuid';

export default function AddKeg(props){
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleNewKegFormSubmit(event){
    event.preventDefault();
    props.onNewKeg({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, id: v4()});
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
  }
  return(
    <div className={styles.addKegWrapper}>
        <div className={styles.kegCard}>
          <h3>Add a New Keg</h3>
          <div className={styles.kegContent}>
            <div className='name-brewer'>
              <ul>
                <li>Beer Name: <input
                   type='text'
                   id='name'
                   placeholder='Beer Name'
                   ref={(input) => {_name = input;}}/>
                </li>
                <li>Brewed by: <input
                   type='text'
                   id='brewer'
                   placeholder='Brewery Name'
                   ref={(input) => {_brewer = input;}}/>
                 </li>
              </ul>
            </div>
            <div className='description-abv'>
              <ul>
                <li>Description:<input
                  type='text'
                  id='description'
                  placeholder='Description'
                  ref={(input) => {_description = input;}}/>
                </li>
                <li>ABV:<input
                   type='text'
                   id='abv'
                   placeholder='Alcohol By Volume'
                   ref={(input) => {_abv = input;}}/>
                 </li>
              </ul>
            </div>
            <div className='price-remaining'>
              <ul>
                <li>Price:<input
                   type='text'
                   id='price'
                   placeholder='Price'
                   ref={(input) => {_price = input;}}/>
                 </li>
                <li>Total Pints:<input
                  type='text'
                  id='remaining'
                  placeholder='Total Pints'
                  ref={(input) => {_remaining = input;}}/>
                </li>
              </ul>
              </div>
          </div>
      <div onClick={handleNewKegFormSubmit} className={styles.addKegButton}>
        <p>Add a New Keg</p>
      </div>
    </div>
</div>
  )
}
