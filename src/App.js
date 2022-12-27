import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/content/homepage/Homepage';
import Carpage from './components/content/carpage/CarPage';

function App() {
  return (
    <>
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/carpage' element={<Carpage />}/>
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
