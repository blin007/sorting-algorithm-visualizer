import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import animations
import headerVariants from './animations/headerVariants';
import homeVariants from './animations/homeVariants';

//import components / pages
import Header from './components/Header';
import Home from './pages/Home/Home';
import Merge from './pages/Merge';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header headerVariants={headerVariants}/>, <Home homeVariants={homeVariants}/>]}/>
          <Route path="/:sortingAlgorithm" element={[<Merge headerVariants={headerVariants} />]} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
