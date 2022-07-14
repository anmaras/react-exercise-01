import React, { Component } from 'react';
import MainListRenderingItem from './MainListRenderingItem';
class MainListRendering extends Component {
  render() {
    const names = [
      { name: 'Antonis', age: 37, id: 1 },
      { name: 'Stelios', age: 31, id: 2 },
    ];
    const nameList = names.map((name) => (
      <MainListRenderingItem key={name.id} person={name} />
    ));

    return <ul>{nameList}</ul>;
  }
}

export default MainListRendering;
