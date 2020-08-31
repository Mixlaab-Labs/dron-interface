import React, { useEffect} from 'react'
import Chart from 'chart.js'

function Graph() {
    Chart.defaults.global.defaultFontSize = 15;
    Chart.defaults.global.defaultFontColor = 'black'

    useEffect(() => {
        const AccelChart = document.getElementById("AccelChart");
        new Chart(AccelChart, {
          type: "line",
          data: {
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
              {
                label: "Eje X",
                data: [4, 5, 9, 13, 15, 7],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(207, 28, 28, 1)',
                borderWidth: 3, 
                lineTension: 0,
                pointBorderWidth: 4,
              },
              {
                label: "Eje Y",
                data: [5, 2, 9, 15, 7, 6],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(0, 255, 46, 1)',
                borderWidth: 3, 
                lineTension: 0,
                pointBorderWidth: 4,
              },
              {
                label: "Eje Z",
                data: [2, 7, 15, 12, 6, 8],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(72, 43, 255, 1)',
                borderWidth: 3, 
                lineTension: 0,
                pointBorderWidth: 4,
              }
            ]
          },

          options: {
            title: {
              display: true,
              text: 'Acelerómetro'
            },

            scales: {
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 20,
                  stepSize: 2
                }
              }]
            }
          }

        });
      });

      useEffect(() => {
        const GyroChart = document.getElementById("GyroChart");
        new Chart(GyroChart, {
          type: "line",
          data: {
            labels: ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
            datasets: [
              {
                label: "Eje X",
                data: [12, 5, 9, 3, 15, 7],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(207, 28, 28, 1)',
                borderWidth: 3, 
                lineTension: 0,
                pointBorderWidth: 4,
              },
              {
                label: "Eje Y",
                data: [0, 2, 9, 15, 7, 10],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(0, 255, 46, 1)',
                borderWidth: 3, 
                lineTension: 0,
                pointBorderWidth: 4,
              },
              {
                label: "Eje Z",
                data: [2, 5, 8, 12, 6, 8],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(72, 43, 255, 1)',
                borderWidth: 3, 
                lineTension: 0,
                pointBorderWidth: 4,
              }
            ]
          },

          options: {
            title: {
              display: true,
              text: 'Giroscopio'
            },

            scales: {
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 20,
                  stepSize: 2
                }
              }]
            }
          }

        });
      });

    return (
        <div className="App m-cont">
            <header className="App-header">
                <h1>
                <div className="card p-2 card-title">Gráficas</div>
                </h1>
            </header>

            <hr />

            <div className="none">
                <canvas className="graph-card container mb-4" id="AccelChart" width= '600' height='300'/>
                <canvas className="graph-card container mb-4" id="GyroChart" width='600' height='300' />
            </div>
        </div>
        
    )
}

export default Graph


