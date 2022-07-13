import style from './App.module.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
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
