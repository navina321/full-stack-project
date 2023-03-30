import './App.scss';
import { useState } from 'react';
import ParkSummaryCard from './components/ParkSummaryCard/ParkSummaryCard';
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage'
import AttractionPageCard from './components/AttractionPageCard/AttractionPageCard';

function App() {

  const [attractions, setAttractions] = useState()

  const url = `http://localhost:8080/attractions`;

  const getAttractions = async() => {
    const res = await fetch(url)
    const data = await res.json()
    setAttractions(data)
  }



  return (
    <div className="App">
     <Header/>
     <AttractionPageCard/> 
     
     {/* <Footer/>
     {/* <ParkSummaryCard/> */}
    </div>
  );
}

export default App;
