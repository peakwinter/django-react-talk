import React from 'react';

export default class PageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {insult: '', clicked: 0};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(previousState => {
      const insults = this.props.data;
      const randomInsult = insults[Math.floor(Math.random() * insults.length)];
      return {
        insult: randomInsult.content,
        clicked: previousState.clicked + 1,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>What is your quest?</h1>
        <p>{this.state.insult}</p>
        <hr />
        <p>Clicked: {this.state.clicked} time(s)</p>
        <button onClick={this.handleClick}>I seek the grail!</button>
      </div>
    );
  }
}
