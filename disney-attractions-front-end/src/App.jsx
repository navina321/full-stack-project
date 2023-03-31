import "./App.scss";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Homepage from "./pages/Homepage/Homepage";
import AttractionPage from "./pages/AttractionPage/AttractionPage";
import ParksPage from "./pages/ParksPage/ParksPage";
import MeetCharacters from "./pages/MeetCharacters/MeetCharacters";
import ParadesShows from "./pages/ParadesShows/ParadesShows";
import EachAttractionPage from "./pages/EachAttractionPage/EachAttractionPage";

import AnimalKingdom from './assets/images/park-images/animal-kingdom.jpg'
import MagicKingdom from './assets/images/park-images/magic-kingdom.jpg'
import BlizzardBeach from './assets/images/park-images/blizzard-beach.jpg'
import EPCOT from './assets/images/park-images/epcot.jpg'
import HollywoodStudios from './assets/images/park-images/hollywood-studios.jpg'
import TyphoonLagoon from './assets/images/park-images/typhoon-lagoon.jpg'
import DisneySprings from './assets/images/park-images/disney-springs.jpg'
import { parkInfo } from "./data/park-info.js";



function App() {

  return (
    <Router>
    <div className="App">
     <Routes>
      <Route path='/home' element={<Homepage/>}/>

      <Route path='/attractions' element={<AttractionPage/>}/>
      <Route path="/attractions/:id" element={<EachAttractionPage/>} />

      <Route path='/magic-kingdom' element={<ParksPage title={parkInfo[0].parkName} image={MagicKingdom} alt={parkInfo[0].parkName} description={parkInfo[0].parkDescription}/>}/>
      <Route path='/animal-kingdom' element={<ParksPage title={parkInfo[1].parkName} image={AnimalKingdom} alt={parkInfo[1].parkName} description={parkInfo[1].parkDescription}/>}/>
      <Route path='/hollywood-studios' element={<ParksPage title={parkInfo[2].parkName} image={HollywoodStudios} alt={parkInfo[2].parkName} description={parkInfo[2].parkDescription}/>}/>
      <Route path='/epcot' element={<ParksPage title={parkInfo[3].parkName} image={EPCOT} alt={parkInfo[3].parkName} description={parkInfo[3].parkDescription}/>}/>
      <Route path='/blizzard-beach' element={<ParksPage title={parkInfo[4].parkName} image={BlizzardBeach} alt={parkInfo[4].parkName} description={parkInfo[4].parkDescription}/>}/>
      <Route path='/typhoon-lagoon' element={<ParksPage title={parkInfo[5].parkName} image={TyphoonLagoon} alt={parkInfo[5].parkName} description={parkInfo[5].parkDescription}/>}/>
      <Route path='/disney-springs' element={<ParksPage title={parkInfo[6].parkName} image={DisneySprings} alt={parkInfo[6].parkName} description={parkInfo[6].parkDescription}/>}/>
     

      <Route path='/characters' element={<MeetCharacters/>}/>
      <Route path='/parades-shows' element={<ParadesShows/>}/>

     </Routes>
    </div>
    </Router>
  );
}

export default App;
