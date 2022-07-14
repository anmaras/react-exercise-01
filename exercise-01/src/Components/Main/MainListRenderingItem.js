import React, { Component } from 'react';

class MainListRenderingItem extends Component {
  render() {
    const { name, age } = this.props.person;
    return (
      <li>
        Hello {name} your age is {age},
      </li>
    );
  }
}

export default MainListRenderingItem;
