import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clickCount: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clickCount: this.state.clickCount + 1
    });
  }

  render() {
    if (this.state.clickCount < 3) {
      return <button className='btn-3clicks btn' onClick={ this.handleClick }>Hot Button</button>;
    } else if (this.state.clickCount < 6) {
      return <button className='btn-6clicks btn' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 9) {
      return <button className='btn-9clicks btn' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 12) {
      return <button className='btn-12clicks btn' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 15) {
      return <button className='btn-15clicks btn' onClick={this.handleClick}>Hot Button</button>;
    } else if (this.state.clickCount < 18) {
      return <button className='btn-18clicks btn' onClick={this.handleClick}>Hot Button</button>;
    } else {
      return <button className='btn-18clicks btn' onClick={this.handleClick}>Hot Button</button>;
    }
  }
}
