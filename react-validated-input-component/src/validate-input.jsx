import React from 'react';

export default class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.CharacterCheck = this.CharacterCheck.bind(this);
  }

  CharacterCheck(event) {
    const password = event.target.value;

    this.setState({ password: event.target.value });
    if (password.length < 8) {
      this.setState({
        password: event.target.value
      });
    }
  }

  render() {
    let message = '';
    let icon = '';

    if (this.state.password.length === 0) {
      message = 'A password is required.';
      icon = 'fa-solid fa-xmark fa-2xl red';
    } else if (this.state.password.length < 8) {
      message = 'Your password is too short.';
      icon = 'fa-solid fa-xmark fa-2xl red';
    } else {
      icon = 'fa-solid fa-check fa-2xl green';
    }

    return (
      <form>
        <label htmlFor="password">Password</label>
        <div>
          <input type="password" name="password" id="password" onChange={ this.CharacterCheck } />
          <i className={`${icon}`}></i>
        </div>
        <p>{`${message}`}</p>
      </form>
    );
  }
}
