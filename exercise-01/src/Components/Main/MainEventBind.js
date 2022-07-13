import React, { Component } from 'react';

class MainEventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'hello',
    };

    // this.changeState = this.changeState.bind(this);
  }

  // changeState() {
  //   this.setState((prev) => ({
  //     message: (prev.message = 'hi'),
  //   }));
  // }

  changeState = () => {
    this.setState((prev) => ({
      message: (prev.message = 'hi'),
    }));
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.changeState.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.changeState()}>Click</button> */}
        <button onClick={this.changeState}>Click</button>
      </div>
    );
  }
}

export default MainEventBind;
