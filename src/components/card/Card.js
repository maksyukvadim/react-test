import React, { Component } from 'react';
import { DragSource } from 'react-dnd';
import * as LocalStorage from '../../store/localStorage';

const checkStatus = (status) => {
    switch (status) {
        case 'do': {
            return 'doing';
        }

        case 'doing': {
            return 'done';
        }

        case 'done': {
            return 'none';
        }

        default: {
            return 'aborted';
        }
        
    }
}

const cardSpec = {
    beginDrag(props) {
        return {
            id: props.card.id,
            status: props.card.status,
            card: props.card,
            store: props.store
        };  
    },
    endDrag(props, monitor) {
        const dragItem = monitor.getItem();
        const dropResult = monitor.getDropResult();
        if(dropResult.name===checkStatus(dragItem.status)) {
            for(let i = 0; i<dragItem.store.cards.length; i++){
                if(dragItem.store.cards[i].id === dragItem.card.id ) {
                    dragItem.store.cards[i].status = dropResult.name;
                    props.moveCard(dragItem.store.cards);
                    break;
                }
            }                         
        } else if(dropResult.name==='aborted') { 
                    if(dragItem.card.status==='do' || dragItem.card.status==='doing' )  {   
                        for(let i = 0; i<dragItem.store.cards.length; i++){
                            if(dragItem.store.cards[i].id === dragItem.card.id ) {
                                dragItem.store.cards[i].status = dropResult.name;
                                props.moveCard(dragItem.store.cards);
                                break;
                            }
                    }     
                } 
        }
    }
};


let collect = (connect, monitor) => {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
};

class Card extends Component {
    openChangeWindow(e) {
    var modal = document.getElementById('modalChange');
    console.log(modal);
    modal.style.display = "block";
    window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
    }
    LocalStorage.setStorage('changeableCard', this.props.card);
  }




  formatDate() {
        let date = new Date(this.props.card.time);
        let dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        let mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        let yy = date.getFullYear() % 100;
        if (yy < 10) yy = '0' + yy;

        let hh = date.getHours() % 100;

        let min = date.getMinutes() % 100;

        return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + min;
    }

  deleteCard(e){
    const {card, deleteCard} = this.props;
    deleteCard(card);
  }

  render() {
    const date = this.formatDate()
    const { connectDragSource, card } = this.props;
    return connectDragSource( 
        <div  className={'priority-'+ card.priority + ' card'} onDoubleClick={this.openChangeWindow.bind(this)}>
            {(card.status === 'done' || card.status==='aborted') && <span onClick={this.deleteCard.bind(this)} className='deleteIco'>X</span>}
            {card.description}
            <br/>
            <span className='time'>{date}</span>
        </div>
    );
  }
}

export default DragSource('card', cardSpec, collect)(Card);