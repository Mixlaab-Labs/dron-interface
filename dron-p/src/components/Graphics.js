import React from 'react'
import { Line } from 'react-chartjs-2'

function Graphics() {
    const dataG = {
        labels: ['Eje X', 'Eje Y', 'Eje Z'],
        datasets: [{
            label: 'Giroscopio',
            borderColor: ['rgba(0, 0, 0, 1)'],
            backgroundColor: 'rgba(78, 84, 89, 0)',
            data: [45.21, 1.10, 33.6],
            lineTension: 0
            
        }]
    }

    const dataA = {
        labels: ['Eje X', 'Eje Y', 'Eje Z'],
        datasets: [{
            label: 'Acelerómetro',
            borderColor: 'rgba(0, 0, 0, 1)',
            backgroundColor: 'rgba(78, 84, 89, 0)',
            data: [0.5, 10.3, 3.4],
            lineTension: 0
        }]
    }

    return (
        <div className=" container m-cont">
                
                <header className="App-header">
                    <h1>
                        <div className="card p-2 card-title">Gráficas</div>
                    </h1>
                </header>
                <hr/>

                <Line data={dataG} />
                <hr />
                <Line data={dataA} />
            
        </div>
    )
}

export default Graphics

