import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import * as LocalStorage from '../../store/localStorage';
import CardSetting from '../cardSettings/CardSettings';



class ModalChangeCard extends Component {

  closeModal(e) {
    var modal = document.getElementById('modalChange');
    modal.style.display = "none";
    
  }

  onChangeCard(e) {
    
    }

  render() {
    const takeCard =  LocalStorage.getStorage('changeableCard');
    return (
      <div id="modalChange" className="modal">
        <div className="modal-content">
            <h2 className='modalHead'>{this.props.title}</h2>
            <span onClick={this.closeModal}  className="close">&times;</span>
            <CardSetting changedCard={takeCard} />
            <Button onClick={this.onChangeCard.bind(this)} bsStyle='primary'>Change</Button>
        </div>
    </div>
    );
  }
}

export default ModalChangeCard;