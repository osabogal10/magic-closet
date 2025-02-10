
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import SecondPage from './components/SecondPage';
import Nublado from './components/Nublado';
import Soleado from './components/Soleado';


function App() {
  
  return (
    <Router>
      <div >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secondPage" element={<SecondPage/>} />
        <Route path="/soleado" element={<Soleado/>} />
        <Route path="/nublado" element={<Nublado/>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
