import './App.scss';
import Footer from './components/Footer/Footer';
import GeneralParksCard from './components/GeneralParksCard/GeneralParksCard';
import Header from './containers/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer/>
      <GeneralParksCard/>
    </div>
  );
}

export default App;
