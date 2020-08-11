import React from 'react'

const cardStyle = {
  backgroundColor: '#6C757D',
  color: 'white'
}

const sensorGData = [
  {
    Eje: 'X: 45.21'
  },
  {
    Eje: 'Y: 1.10'
  },
  {
    Eje: 'Z: 33.6'
  }
]

function GyroCard(props) {
  return (
    <div className="col-md-4 mx-auto">
      <div className="card m-2 card-border">
        <h5 className="card-header m-3" style={cardStyle}>
          {props.header}
        </h5>
        
        <strong>{props.body}</strong>
        <p></p>
        {sensorGData.map((ejeData) =>  <p key={ejeData.Eje}>Eje {ejeData.Eje}</p> )}
    
      </div>
    </div>


  )
}

export default GyroCard











