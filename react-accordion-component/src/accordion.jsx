import React from 'react';

export default class Accordion extends React.Component {
  // set the initial state with a constructor:
  constructor(props) {
    super(props);

    this.state = {
      openId: null
    };
  }

  // make an even click handler function
  handleClick(id) {
    // get the data-id of the headers with event.currentTarget.getAttribute('data-id')
    // console.log('Title Clicked!', event.currentTarget.getAttribute('data-id'));
    // console.log('titleId Clicked!:', id);
    if (id === this.state.openId) {
      this.setState({
        openId: null
      });
    } else {
      this.setState({
        openId: id
      });
    }
  }

  // pass components via props
  render() {
    // console.log('STATE:', this.state);

    // console.log('PROPS:', this.props);
    const topicElements = this.props.topics.map(topic => {
      // console.log('TOPIC:', topic);
      // return <p>Topic!</p>;

      return (
        <div key={topic.id} className="topic">
          <div className="topic-title" onClick={() => { this.handleClick(topic.id); }}>
            <h3>{topic.title}</h3>
          </div>
          {
            this.state.openId === topic.id
              ? (
                <div className="topic-content">
                  {topic.content}
                </div>
                )
              : null
          }
        </div>
      );
    });

    return (
      <div className="container">
        {topicElements}
      </div>
    );
  }
}
