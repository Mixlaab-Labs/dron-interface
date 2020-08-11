import React from 'react'
import { Bar } from 'react-chartjs-2'

function Graphics() {
    const dataG = {
        labels: ['Eje X', 'Eje Y', 'Eje Z'],
        datasets: [{
            label: 'Giroscopio',
            borderColor: ['rgba(89, 149, 201, 0.2)'],
            backgroundColor: 'rgba(255, 184, 41, 0.5)',
            data: [45.21, 1.10, 33.6],
            
        }]
    }

    const dataA = {
        labels: ['Eje X', 'Eje Y', 'Eje Z'],
        datasets: [{
            label: 'Acelerómetro',
            borderColor: 'rgba(255, 255, 255, 0.2)',
            backgroundColor: 'rgba(255, 132, 41, 0.5)',
            data: [0.5, 10.3, 3.4]
        }]
    }

    return (
        <div>
            <div className="container"> 
                
                <header className="App-header">
                    <h1>
                        <div className="card p-2 card-title">Gráficas</div>
                    </h1>
                </header>
                <hr/>

                <Bar data={dataG} />
                <hr />
                <Bar data={dataA} />
            </div>
        </div>
    )
}

export default Graphics

