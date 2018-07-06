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

  function submitEdit(event){
    event.preventDefault();
    props.onHandleSubmitEditForm({name: _name.value, brewer: _brewer.value, description: _description.value, abv: Math.abs(_abv.value) + '%', price: Math.abs(_price.value), remaining: Math.abs(_remaining.value), id: props.kegId});
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
        <h3>Edit This Keg</h3>
        <div className={styles.kegContent}>
          <div className='name-brewer'>
            <ul>
              <li>Beer Name: <input
                type='text'
                id='name'
                placeholder={props.name}
                ref={(input) => {_name = input;}}/>
              </li>
              <li>Brewed by: <input
                type='text'
                id='brewer'
                placeholder={props.brewer}
                ref={(input) => {_brewer = input;}}/>
              </li>
            </ul>
          </div>
          <div className='description-abv'>
            <ul>
              <li>Description:<input
                type='text'
                id='description'
                placeholder={props.description}
                ref={(input) => {_description = input;}}/>
              </li>
              <li>ABV:<input
                type='number'
                id='abv'
                placeholder={props.abv}
                ref={(input) => {_abv = input;}}/>
              </li>
            </ul>
          </div>
          <div className='price-remaining'>
            <ul>
              <li>Price:<input
                type='number'
                id='price'
                placeholder={props.price}
                ref={(input) => {_price = input;}}/>
              </li>
              <li>Total Pints:<input
                type='number'
                id='remaining'
                placeholder={props.remaining}
                ref={(input) => {_remaining = input;}}/>
              </li>
            </ul>
          </div>
        </div>
        <div type='submit' onClick={submitEdit} className={styles.addKegButton}>
          <p>Edit the Keg</p>
        </div>
      </div>
    </div>
  );
  EditForm.PropTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    remaining: PropTypes.string,
    formVisible: PropTypes.boolean,
    key: PropTypes.string,
    kegId: PropTypes.string,
    onHandleSubmitEditForm: PropTypes.func,
    onHandleClick: PropTypes.func,
  };
}
