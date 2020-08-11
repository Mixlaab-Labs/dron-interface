import React from 'react'

const cardStyle = {
  backgroundColor: '#6C757D',
  color: 'white'
}

const sensorAData = [
  {
    Eje: 'X: 0.05'
  },
  {
    Eje: 'Y: 10.3'
  },
  {
    Eje: 'Z: 3.4'
  }
];

function AccelCard(props) {
  return (
    <div className="col-md-4 mx-auto">
      <div className="card m-2 card-border">
        <h5 className="card-header m-3" style={cardStyle}>
          {props.header}
        </h5>
        
        <strong>{props.body}</strong>     
        <p></p>

        {sensorAData.map((ejeData) =>  <p key={ejeData.Eje}>Eje {ejeData.Eje}</p> )}
      
      </div>
    </div>
  )
}

export default AccelCard
