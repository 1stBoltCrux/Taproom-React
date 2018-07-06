import React from 'react';
import styles from './editkeg.css';
import EditForm from './EditForm.jsx';

export default function EditKeg(props) {

  function handleEditKegFormSubmit(event){
    event.preventDefault();
    props.onKegEdit({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value, id: props.id});
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
  }

    let visibleContent = null;
    if (props.formVisible) {
      visibleContent = <EditForm onHandleClick={props.onHandleClick}
                                 kegId={props.kegId}
                                 onHandleSubmitEditForm={props.onHandleSubmitEditForm}
                                 name={props.name}
                                 brewer={props.brewer}
                                 description={props.description}
                                 abv={props.abv}
                                 price={props.price}
                                 remaining={props.remaining}
                                 />;

    } else {
      visibleContent = null;
    }
    return(
      <div className='edit-keg-wrapper'>
        <div onClick={()=> props.onHandleClick(props.kegId)} className={styles.editButton}>
          <p>Edit</p>

        </div>
        {visibleContent}
      </div>
    );

}
