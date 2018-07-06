import React from 'react';
import styles from './editform.css';
import PropTypes from 'prop-types';

export default function EditForm(props){
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  return(
    <div className={styles.addKegWrapper}>
      <div className={styles.kegCard}>
        <h3>Edit This Keg</h3>
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
        <div onClick={props.handleClick} className={styles.addKegButton}>
          <p>Add a New Keg</p>
        </div>
      </div>
    </div>
  );
  EditForm.PropTypes = {
    handleClick: PropTypes.func
  };
}
