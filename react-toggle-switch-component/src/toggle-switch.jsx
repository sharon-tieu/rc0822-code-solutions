import React from 'react';

// constructor component
export default class ToggleSwitch extends React.Component {
  // constructor for isOn true or false.
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOn: false
    };
  }

  handleClick() {
    this.setState({ isOn: !this.state.isOn });
  }

  render() {
    let toggleHolder = 'toggle-holder-off';
    let toggle = 'toggle-off-left';
    let text = 'OFF';

    if (this.state.isOn) {
      text = 'ON';
      toggle = 'toggle-on-right';
      toggleHolder = 'toggle-holder-on';
    } else {
      text = 'OFF';
      toggle = 'toggle-off-left';
      toggleHolder = 'toggle-holder-off';
    }

    return (
      <div className="row">
        <div className="column-half">
          <div className={`${toggleHolder}`}>
            <div
              className= {`${toggle}`}
              onClick={ this.handleClick }>
              </div>
          </div>
        </div>
        <div className="column-half">
          <p>{`${text}`}</p>
        </div>
      </div>
    );
  }
}
