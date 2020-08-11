import React from 'react'

const ProgressBar = (props) => {
    
    const bar1 = {
        width: '15%',
        backgroundColor: 'red'
    }

    const bar2 = {
        width: '25%',
        backgroundColor: '#FFA500'
    }

    const bar3 = {
        width: '25%',
        backgroundColor: 'yellow'
    }

    const barStyle  =  {
        width : `${props.barWidth}`
    }

    return (

    <div className="progress m-3">
    <div className="progress-bar" role="progressbar" style={bar1} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
    <div className="progress-bar" role="progressbar" style={bar2} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    <div className="progress-bar" role="progressbar" style={bar3} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    )
}

export default ProgressBar
