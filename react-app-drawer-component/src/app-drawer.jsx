import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let menuBar = 'fa-solid fa-bars fa-xl margin-top-30 margin-left-30';
    let modal = 'hide';
    if (this.state.isClicked) {
      menuBar = 'hide';
      modal = 'modal-container-bg';
    }

    return (
      <div className="container">
        <i className={menuBar} onClick={ this.handleClick }></i>
        <div className={modal} onClick={ this.handleClick }>
          <div className="modal-app-drawer">
            <p className="menu-heading margin-bottom-30 margin-left-30">Menu</p>
            <p className="menu-item margin-left-30">About</p>
            <p className="menu-item margin-left-30">Get Started</p>
            <p className="menu-item margin-left-30">Sign-In</p>
          </div>
        </div>
      </div>
    );
  }
}
