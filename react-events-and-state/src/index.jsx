import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    // console.log('state:', this.state);

    if (this.state.isClicked) {
      return <button>Thank you!</button>;
    } else {
      return <button onClick={ this.handleClick }>Click me!</button>;
    }
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<CustomButton />);
