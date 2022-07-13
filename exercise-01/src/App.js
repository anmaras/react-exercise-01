import React, { Component } from 'react';
import style from './App.module.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

// class App extends Component {
//   render() {
//     return (
//       <div className={style['App-header']}>
//         <Header />
//         <Main />
//         <Footer />
//       </div>
//     );
//   }
// }

const App = () => {
  return (
    <div className={style['App-header']}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default App;
