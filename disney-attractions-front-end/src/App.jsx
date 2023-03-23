import './App.scss';
import MainPageAttrCards from './components/MainPageAttrCards/MainPageAttrCards';
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainPageAttrCards/>
    </div>
  );
}

export default App;
