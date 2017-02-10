import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './components/header/Header';
import ModalCreatingCard from './components/modalCreatingCard/ModalCreatingCard';
import ModalChangeCard from './components/modalChangeCard/ModalChangeCard';
import BlockColumn from './components/blockColumn/BlockColumn';
import * as pageActions from './actions/PageActions';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/card/Card.css';
import './components/cardSettings/CardSettings.css';
import './components/statusColumn/StatusColumn.css';

import './components/modalCreatingCard/ModalCreatingCard.css';
import './components/listCard/ListCard.css';


class App extends Component {
  render() {
    const { createCard } = this.props.pageActions;
    return ( 
      <div className='container'>
        <ModalCreatingCard title='Create new card' createCard={createCard}/>
        <ModalChangeCard title='Change card'/>
        <Header title="Kanban Desk" />
        <BlockColumn cards={this.props.cards}  />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    cards: state.cards
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
