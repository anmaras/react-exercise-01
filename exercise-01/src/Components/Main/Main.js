import React, { Component } from 'react';
import MainTitle from './MainTitle';
import MainCounter from './MainCounter';

class Main extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'blue' }}>
        <MainTitle />
        <MainCounter />
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
