import React, { Component } from 'react';
import style from './App.module.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';

const object = {
  header: 'header-section',
  main: 'main-section',
  footer: 'footer-section',
};

class App extends Component {
  render() {
    return (
      <div className={style['App-header']}>
        <Header header={object.header} />
        <Main main={object.main} />
        <Footer footer={object.footer} />
      </div>
    );
  }
}

// const App = () => {
//   return (
//     <div className={style['App-header']}>
//       <Header  name={object.header}/>
//       <Main name={object.main}/>
//       <Footer name={object.footer}/>
//     </div>
//   );
// };
export default App;
