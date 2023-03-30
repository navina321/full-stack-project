import './App.scss';
import { useState } from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import ParkSummaryCard from './components/ParkSummaryCard/ParkSummaryCard';
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage/Homepage'
import AttractionPageCard from './components/AttractionPageCard/AttractionPageCard';
import AttractionPage from './pages/AttractionPage/AttractionPage';
import MeetCharacters from './pages/MeetCharacters/MeetCharacters';


function App() {

  const [attractions, setAttractions] = useState()

  const url = `http://localhost:8080/attractions`;

  const getAttractions = async() => {
    const res = await fetch(url)
    const data = await res.json()
    setAttractions(data)
  }



  return (
    // <Router>
    // <div className="App">
    //  <Routes>
    //   <Route path='/home' component={<Homepage/>}/>
    //  </Routes>
    // </div>
    // </Router>

    <div className='App'>
      <MeetCharacters/>
    </div>
  );
}

export default App;
