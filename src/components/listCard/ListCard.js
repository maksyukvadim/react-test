import React, { Component } from 'react';
import Card from '../card/Card';
import {bindActionCreators} from 'redux';
import {connect}  from 'react-redux';
import * as pageActions from '../../actions/PageActions';

class ListCard extends Component {

  render() { 
    const {moveCard, deleteCard} = this.props.pageActions;
    const store = this.props.store;
    return ( 
        <div className='listCard'>
          {this.props.cards.map((card, index)=> {
            return <Card moveCard={moveCard} deleteCard={deleteCard} 
            store={store} className='card' key={index} card={card} />;
          })}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // cards: state.cards
    store:state
  }
} 

const  mapDispatchToProps = (dispatch) => {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);
