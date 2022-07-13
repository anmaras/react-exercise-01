import React, { Component, useState } from 'react';

// class MainCounter extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }

//   increment() {
//     this.setState(
//       (prevState) => ({
//         count: prevState.count + 1,
//       }),
//       () => {
//         if (this.state.count > 10) {
//           this.setState((prevState) => ({
//             count: (prevState.count = 0),
//           }));
//         }
//       }
//     );
//   }

//   decrement() {
//     this.setState(
//       (prevState) => ({
//         count: prevState.count - 1,
//       }),
//       () => {
//         if (this.state.count < -10) {
//           this.setState((prevState) => ({
//             count: (prevState.count = 0),
//           }));
//         }
//       }
//     );
//   }

//   render() {
//     return (
//       <div>
//         <h3>MainCounter {this.state.count}</h3>
//         <button onClick={() => this.increment()}>increment</button>
//         <button onClick={() => this.decrement()}>decrement</button>
//       </div>
//     );
//   }
// }

const MainCounter = () => {
  let [currentValue, setCurrentValue] = useState(0);

  const increment = () => setCurrentValue((prev) => (currentValue = prev + 1));

  const decrement = () => setCurrentValue((prev) => (currentValue = prev - 1));

  return (
    <div>
      <h3>MainCounter {currentValue}</h3>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default MainCounter;
