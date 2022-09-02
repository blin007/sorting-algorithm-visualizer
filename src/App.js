import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import headerVariants from './animations/headerVariants';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Home headerVariants={headerVariants}/>]}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
