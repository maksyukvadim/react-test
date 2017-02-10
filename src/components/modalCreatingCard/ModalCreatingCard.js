import React, { Component } from 'react';
import Button from 'react-bootstrap/lib/Button';
import * as LocalStorage from '../../store/localStorage';
import CardSetting from '../cardSettings/CardSettings';

class ModalCreatingCard extends Component {

  closeModal(e) {
    var modal = document.getElementById('modalCreate');
    modal.style.display = "none";
    
  }

  onCreateCard(e) {
      const cardId = LocalStorage.getStorage('cardId');
      let card = {};
      let description = document.getElementById('descriptTask');
      let select = document.getElementById('priorityTask');
      card.description = description.value;
      card.priority = select.value;
      card.time = Date.now();
      card.status = 'do';
      card.id = cardId || 1;
      LocalStorage.setStorage('cardId', (card.id + 1));
      this.props.createCard(card);
    }

  render() {
    return (
      <div id="modalCreate" className="modal">
        <div className="modal-content">
            <h2 className='modalHead'>{this.props.title}</h2>
            <span onClick={this.closeModal}  className="close">&times;</span>
            <CardSetting />
            <Button onClick={this.onCreateCard.bind(this)} bsStyle='primary'>Apply</Button> 
        </div>
    </div>
    );
  }
}

export default ModalCreatingCard;