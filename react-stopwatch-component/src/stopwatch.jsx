import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isCounting: false
    };
    this.handleCount = this.handleCount.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
  }

  handleCount() {
    if (!this.state.isCounting) {
      this.setState({ isCounting: true });
      this.myInterval = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
    } else {
      this.setState({ isCounting: false });
      clearInterval(this.myInterval);
    }
  }

  resetInterval() {
    if (!this.state.isCounting) {
      // console.log('this.state.isCounting:', this.state.isCounting);
      this.setState({
        count: 0
      });
    }
  }

  render() {
    let counting = this.state.count;
    let play = 'fa-solid fa-play fa-xl';

    if (this.state.isCounting) {
      play = 'fa-solid fa-pause fa-xl';
    } else {
      play = 'fa-solid fa-play fa-xl';
      counting = this.state.count;
    }

    return (
      <div className="container">
      <button className="circle" onClick= { this.resetInterval }>
        {counting}
      </button>
      <div className="column-full">
        <i className={`${play}`} onClick={ this.handleCount }></i>
      </div>
    </div>
    );
  }
}
