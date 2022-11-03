import React from 'react';
import * as ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log('state:', this.state);
    event.preventDefault();
  }

  render() {
    return (
    <form onSubmit= { this.handleSubmit }>
      <label>
        Username:
        <input
          type="text"
          value={ this.state.username }
          onChange={ this.handleUsernameChange }
          />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={ this.state.password }
          onChange={ this.handlePasswordChange }
        />
      </label>
      <input
        type="submit"
        value="Sign Up"
        />
    </form>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RegistrationForm />);
