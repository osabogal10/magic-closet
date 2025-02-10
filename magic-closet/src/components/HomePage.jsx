
import './App.css';
import tenis from '../assets/tenis.png';
import { useNavigate } from "react-router-dom";


function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <img src={tenis} className="App-logo" alt="logo" />
      <h2> BIENVENIDO A </h2>
      <h1> Shoes 4 you </h1>
      <button onClick={() => navigate("/secondPage")}>Comenzar</button>
    </div>
  );
}

export default HomePage;
