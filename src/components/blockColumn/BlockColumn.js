import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import StatusColumn from '../statusColumn/StatusColumn';

const takeStatus =  (status, cards) =>  {
    let arrStatus = [];
    for(let i = 0; i < cards.length; i++) {
      
      if(cards[i].status ===  status) {
          arrStatus.push(cards[i]);
      }

    }
    return arrStatus;
  };

const sortByPriority = (arr) => {
    let comparePriority = (thisCard, nextCard) => {
    return thisCard.priority - nextCard.priority;
  }
  return arr.sort(comparePriority);
};

const sortByDate = (arr) => {
    let comparePriority = (thisCard, nextCard) => {
    return nextCard.date - thisCard.date;
  }
  return arr.sort(comparePriority);
};

const startSortedCards = (status, cards) => {
  return  sortByDate(sortByPriority(takeStatus(status, cards)));
}

class BlockColumn extends Component {
  render() {
    const  cards  = this.props.cards;
    const type = {do:'do', doing:'doing', done:'done', aborted:'aborted'};
    return (
      <div className='row'>
          <StatusColumn type={type.do}  cards={startSortedCards(type.do, cards)} title='DO IT' />
          <StatusColumn type={type.doing}  cards={startSortedCards(type.doing, cards)} title='DOING' />
          <StatusColumn type={type.done}  cards={startSortedCards(type.done, cards)} title='DONE' />
          <StatusColumn type={type.aborted}  cards={startSortedCards(type.aborted, cards)} title='ABORTED' />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(BlockColumn) ;