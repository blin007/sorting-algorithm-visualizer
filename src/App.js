import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import animations
import headerVariants from './framer-motion/headerVariants';
import homeVariants from './framer-motion/homeVariants';

//import components / pages
import Header from './components/Header';
import Home from './pages/Home/Home';
import Merge from './pages/Merge';
import Quick from './pages/Quick';
import Bubble from './pages/Bubble';
import Insertion from './pages/Insertion';
import Selection from './pages/Selection';
import Heap from './pages/Heap';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header headerVariants={headerVariants}/>, <Home homeVariants={homeVariants}/>]}/>
          <Route path="/insertion" element={[<Insertion headerVariants={headerVariants} />]} />
          <Route path="/heap" element={[<Heap headerVariants={headerVariants} />]} />
          <Route path="/merge" element={[<Merge headerVariants={headerVariants} />]} />
          <Route path="/quick" element={[<Quick headerVariants={headerVariants}/>]} />
          <Route path="/bubble" element={[<Bubble headerVariants={headerVariants}/>]} />
          <Route path="/selection" element={[<Selection headerVariants={headerVariants} />]} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
