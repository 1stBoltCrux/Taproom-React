import React from 'react';
import styles from './editkeg.css';

export default class EditKeg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      formVisible: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      formVisible: !prevState.formVisible
    }));
  }

  render(){
    let visibleContent = null;
    if (this.state.formVisible) {
      visibleContent = 'hooplah';
    } else {
      visibleContent = null;
    }
    console.log(visibleContent);
    return(
      <div className='edit-keg-wrapper'>
        <div onClick={this.handleClick} className={styles.editButton}>
          <p>Edit</p>

        </div>
        {visibleContent}
      </div>
    )
  }

}
