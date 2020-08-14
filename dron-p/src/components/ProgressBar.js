import React from 'react'

const ProgressBar = (props) => {
    

    const barStyle  =  {
        width : `${100 - props.barWidth}%`
    }

    return (

    <div className="bg-bar">
        <div className="top-bar white-txt" style={barStyle}>
            .
        </div>
    </div>
    )
}

export default ProgressBar
