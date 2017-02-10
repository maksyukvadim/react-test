import React, { Component } from 'react';

class Header extends Component {

  openModal() {
    var modal = document.getElementById('modalCreate');
    modal.style.display = "block";
    window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
    }
  }


  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.openModal} >+</button>
      </div>
    );
  }
}

export default Header;