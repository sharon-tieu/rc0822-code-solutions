import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // console.log('click detected!');
  }

  render() {
    return (
    <div className="container">
      <div className="row">
        <div className="column-200 flex-direction-col text-align-left padding-left-8">
          <i className="fa-solid fa-bars fa-2xl margin-top-20" onClick={ this.handleClick }></i>
          {/* <p className="menu-heading margin-bottom-30">Menu</p>
          <p className="menu-items">About</p>
          <p className="menu-items">Get Started</p>
          <p className="menu-items">Sign In</p> */}
        </div>
        {/* <div className="column-790">
        </div> */}
      </div>
    </div>
    );
  }
}
