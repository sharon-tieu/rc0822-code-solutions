import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleDotClick = this.handleDotClick.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
    // console.log('PROPS:', props);
    // console.log(props.images[0]);

    this.state = {
      displayImageIndex: 0
    };
  }

  handleRightClick() {
    if (this.state.displayImageIndex === this.props.images.length - 1) {
      this.setState({
        displayImageIndex: 0
      });
      return;
    }
    this.setState({
      displayImageIndex: this.state.displayImageIndex + 1
    });
    this.resetInterval();
  }

  handleLeftClick() {
    if (this.state.displayImageIndex === 0) {
      this.setState({
        displayImageIndex: this.props.images.length - 1
      });
    } else {
      this.setState({
        displayImageIndex: this.state.displayImageIndex - 1
      });
    }
    this.resetInterval();
  }

  handleDotClick(idx) {
    this.setState({
      displayImageIndex: idx
    });
    this.resetInterval();
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        displayImageIndex: (this.state.displayImageIndex + 1) % this.props.images.length
      });
    }, 2000);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.setState({
        displayImageIndex: (this.state.displayImageIndex + 1) % this.props.images.length
      });
    }, 2000);
  }

  render() {
    // console.log('this.state:', this.state);

    return (
      <div className="container">
        <div className="row">
          <div className="col-one-fourth">
            <i className="fa-solid fa-less-than fa-2xl" onClick={ this.handleLeftClick }></i>
          </div>
          <div className="col-half">
            <img src={ this.props.images[this.state.displayImageIndex].url } alt="pokemon" />
          </div>
          <div className="col-one-fourth">
            <i className="fa-solid fa-greater-than fa-2xl" onClick={ this.handleRightClick }></i>
          </div>
        </div>
        <div className="row">
          <div className="col-full">

            <div>
              { this.props.images.map((el, idx) => {
                if (idx === this.state.displayImageIndex) {
                  // console.log('dot idx:', idx);
                }

                return idx === this.state.displayImageIndex
                  ? <i className="fa-solid fa-circle" key={el.id} onClick={ () => this.handleDotClick(idx) }></i>
                  : <i className="fa-regular fa-circle" key={el.id} onClick={ () => this.handleDotClick(idx) }></i>;
              }) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
