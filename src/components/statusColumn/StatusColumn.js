import React, { Component } from 'react';
import ListCard from '../listCard/ListCard';
import { DropTarget } from 'react-dnd';

  const ShoppingCartSpec = { 
      drop(props) {
          return { name: props.type };
      }
  };

let collect = (connect, monitor) => {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    };
};

class StatusColumn extends Component {
  
  render() {
    const {  connectDropTarget } = this.props;
    return connectDropTarget(
      <div className='col-md-3 column'>
      <h2>{this.props.title}</h2>
        <ListCard cards={this.props.cards} />
      </div>
    );
  }
}

export default DropTarget('card', ShoppingCartSpec, collect)(StatusColumn);