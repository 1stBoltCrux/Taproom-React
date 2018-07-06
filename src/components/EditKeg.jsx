import React from 'react';
import styles from './editkeg.css';
import EditForm from './EditForm.jsx';
import PropTypes from 'prop-types';

export default function EditKeg(props) {

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

EditKeg.PropTypes = {
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
}
