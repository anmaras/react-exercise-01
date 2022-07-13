import React, { Component } from 'react';
import MainTitle from './MainTitle';

class Main extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'blue' }}>
        <MainTitle mainTitleText={this.props.main} />
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
