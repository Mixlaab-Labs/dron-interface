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
                label: "Meses del año",
                data: [12, 5, 2, 9, 15, 7],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'rgba(0, 0, 0,1)',
                borderWidth: 2, 
                lineTension: 0,
                pointBorderWidth: 3,
              }
            ]
          },

          options: {
            title: {
              display: true,
              text: 'Acelerómetro'
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
                label: "Meses del año",
                data: [5, 7, 14, 9, 4, 12],
                backgroundColor: 'rgba(255, 255, 255, 0)',
                borderColor: 'black',
                borderWidth: 2,
                lineTension: 0,
                pointBorderWidth: 3,
              }
            ]
          },

          options: {
            title: {
              display: true,
              text: 'Giroscopio'
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


