import './App.scss';
import { useState } from 'react';
import ParkSummaryCard from './components/ParkSummaryCard/ParkSummaryCard';
import Header from './containers/Header/Header';


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
     <ParkSummaryCard/>
    </div>
  );
}

export default App;
