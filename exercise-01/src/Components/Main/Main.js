import React, { Component } from 'react';
import MainTitle from './MainTitle';
import MainCounter from './MainCounter';
import MainEventBind from './MainEventBind';
import MainDataUp from './MainDataUp';
import MainConditionalRender from './MainConditionalRender';
import MainListRendering from './MainListRendering';
import MainForm from './MainForm';
import style from './Main.module.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: 'Parent',
    };

    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    const { key } = childName;
    console.log(`Hello ${this.state.parentName} ${key}`);
  }

  render() {
    return (
      <div className={style['main-section']}>
        <MainTitle />
        <MainCounter />
        <MainEventBind />
        <MainDataUp greet={this.greetParent} />
        <MainConditionalRender />
        <MainListRendering />
        <MainForm />
      </div>
    );
  }
}

// const Main = (props) => {
//   return (
//     <div style={{ backgroundColor: 'blue' }}>
//       <MainTitle mainTitleText={props.main} />
//     </div>
//   );
// };

export default Main;
