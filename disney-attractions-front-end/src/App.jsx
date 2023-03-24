import './App.scss';
import Carousel from './components/Carousel/Carousel';
import Homepage from './pages/Homepage/Homepage';
import AnimalKingdom from './assets/images/park-images/animal-kingdom.jpg'


function App() {
  return (
    <div className="App">
     {/* <Homepage/> */}
     <Carousel imagesArr = {AnimalKingdom}/>
    </div>
  );
}

export default App;
