import React, { Component } from 'react';

// class MainDataUp extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       test: this.props.greet,
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div>MainDataUp</div>
//         <button onClick={() => this.state.test('child')}>Click</button>
//       </div>
//     );
//   }
// }

const MainDataUp = (props) => {
  const test = {
    key: '12313123',
    foo: 'g',
  };

  return (
    <div>
      <div>MainDataUp</div>
      <button onClick={() => props.greet(test)}>Click</button>
    </div>
  );
};

export default MainDataUp;
