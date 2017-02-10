import React, { Component } from 'react';

class CardSetting extends Component {


  render() {
    
    var description = '';
    var defaultValue = '3';
    if(this.props.changedCard) {
       description = this.props.changedCard.description;
       defaultValue = this.props.changedCard.priority;
       console.log(description);

    }
    return (
      <div className="rrr">
        <label htmlFor="descriptTask">Description</label>
        <textarea defaultValue={description} name='descriptTask' id='descriptTask'></textarea>  
        <label htmlFor="priorityTask">Priority</label>
        <select name='priorityTask' id='priorityTask' defaultValue={defaultValue} ref='selectTask'>
            <option value='3' >low</option>
            <option value='2' >normal</option>
            <option value='1' >hight</option>
        </select>
      </div>
    );
  }
  componentWillUnmount() {
    console.log(213213);
  }
}

export default CardSetting;