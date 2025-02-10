
import './App.css';
import { useNavigate } from "react-router-dom";


function SecondPage() {
    const navigate = useNavigate();

  return (
    <div className="SecondPage">
        <h1>Cómo se ve el clima el día de hoy?</h1>
        <button className='buttonSoleado' onClick={() => navigate("/soleado")}>Soleado</button>
        <br />
        <button className='buttonNublado' onClick={() => navigate("/nublado")}>Nublado</button>
    </div>
  );
}

export default SecondPage;
