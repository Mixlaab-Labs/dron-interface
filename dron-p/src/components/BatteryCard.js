import React from 'react'
import Bar from './ProgressBar'

const cardStyle = {
  backgroundColor: '#6C757D',
  color: 'white'
}

function BatteryCard(props) {
  return (
    <div className="col-md-4 mx-auto">  
            <div className="card m-2 card-border">
            <h5 className="card-header m-3" style={cardStyle}>
              {props.header}
            </h5>
            
            <strong>{props.body}</strong>
            <p></p>
  <h1>{props.battery}%</h1>
          
         <Bar barWidth={props.battery}/> 
          </div>
        </div>
  )
}

export default BatteryCard
