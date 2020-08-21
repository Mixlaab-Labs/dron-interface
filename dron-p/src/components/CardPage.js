import React from 'react';

import Bateria from './BatteryCard'
import Giroscopio from './GyroCard'
import Acelerometro from './AccelCard'


/*import logo from './logo.svg';*/





function CardPage() {
  return (
    
    <div className="container m-cont">


        <header className="App-header">
          <h1>
            <div className="card p-2 card-title">Sensores</div>
          </h1>
        </header>

        <hr />

        <div className="row">
            <Bateria header="Batería" body="Batería actual" battery="2"/>
            <Giroscopio header= "Giroscopio" body="Rotación" />
            <Acelerometro header= "Acelerómetro" body="Aceleración" />
        </div>

    </div>
  );
}

export default CardPage;
