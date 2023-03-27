import './App.scss';
import ParkSummaryCard from './components/ParkSummaryCard/ParkSummaryCard';
import Header from './containers/Header/Header';


function App() {
  return (
    <div className="App">
     <Header/>
     <ParkSummaryCard/>
    </div>
  );
}

export default App;
