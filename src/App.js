import './styles/App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home/Home';
import headerVariants from './animations/headerVariants';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={[<Header linkVariants={headerVariants}/>, <Home />]}/>
        </Routes>
      </div>
    </Router>

  );
}

export default App;
