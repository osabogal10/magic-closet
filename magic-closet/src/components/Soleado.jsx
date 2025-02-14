import './App.css';
import nube from '../assets/sol.gif';
import shoes1 from '../assets/shoes1.jpg';
import shoes2 from '../assets/shoes2.jpg';
import { selectShoe } from '../api/services';
import { useState } from 'react';

const soleados = [
  {
    id: 1,
    url: shoes1,
  },
  {
    id: 2,
    url: shoes2,
  }
]

function Soleado() {
  const [selectedShoe, setSelectedShoe] = useState(null);
  return (
    <div className='Soleado'>
      <img className='icon' src={nube} alt='' />
      {!selectedShoe && (
        <div>
          <h1>Estos son los zapatos que más te sirven para el día:</h1>
          <img
            className='shoe'
            onClick={() => {
              setSelectedShoe(soleados[0]);
              selectShoe(soleados[0].id);
            }}
            src={soleados[0].url}
            alt=''
          />
          <br />
          <img
            className='shoe'
            onClick={() => {
              setSelectedShoe(soleados[1]);
              selectShoe(soleados[1].id);
            }}
            src={soleados[1].url}
            alt=''
          />
        </div>
      )}
      {selectedShoe && (
        <div>
          <h1>Disfruta tu día con la mejor selección de zapatos</h1>
          <img
            className='shoe'
            onClick={() => selectShoe(1)}
            src={selectedShoe.url}
            alt=''
          />
        </div>
      )}
    </div>
  );
}

export default Soleado;
