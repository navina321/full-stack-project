import './App.scss';
import { useState } from 'react';
import ParkSummaryCard from './components/ParkSummaryCard/ParkSummaryCard';
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage'
import AttractionPageCard from './components/AttractionPageCard/AttractionPageCard';
import AttractionPage from './pages/AttractionPage/AttractionPage';


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
     {/* <Header/>
     
     <Footer/> */}
      <AttractionPage/>
    </div>
  );
}

export default App;
