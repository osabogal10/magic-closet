
import './App.css';
import nube from '../assets/nube.png';
import {selectShoe} from '../api/services';
import { useState } from 'react';

// TODO ORLY: actualizar imagenes
const nublados = [
  {
    id: 3,
    url: 'https://mateodevia.com/avatar.jpeg',
  },
  {
    id: 4,
    url: 'https://mateodevia.com/avatar.jpeg',
  }
]

function Nublado() {
  const [selectedShoe, setSelectedShoe] = useState(null);

  return (
    <div className="Nublado">
          <img className='icon' src={nube} alt='' />
          {!selectedShoe && (
            <div>
              <h1>Estos son los zapatos que más te sirven para el día:</h1>
              <img
                className='shoe'
                onClick={() => {
                  setSelectedShoe(nublados[0]);
                  selectShoe(nublados[0].id);
                }}
                src={nublados[0].url}
                alt=''
              />
              <br />
              <img
                className='shoe'
                onClick={() => {
                  setSelectedShoe(nublados[1]);
                  selectShoe(nublados[1].id);
                }}
                src={nublados[1].url}
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

export default Nublado;
