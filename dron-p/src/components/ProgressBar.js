import React from 'react'

const ProgressBar = (props) => {

    const barStyle  =  {
        width : `${props.barWidth}%`,
    }

    const perc = parseInt(barStyle.width)
    
    if(perc >= 0 && perc <= 20){
        return (
            <div className="bg-bar">
                <div className="red-bar txt" style={barStyle}>
                    .
                </div>
            </div>
        )
    } else {
        if(perc >= 21 && perc <= 40){
            return(
                <div className="bg-bar">
                    <div className="orange-bar txt" style={barStyle}>
                        .
                    </div>
                </div>
            )
            
        } else {
            if(perc >= 41 && perc <= 60){
                return(
                    <div className="bg-bar">
                        <div className="yellow-bar txt" style={barStyle}>
                            .
                        </div>
                    </div>
                )
            } else {
                if(perc >= 61 && perc <= 80){
                    return(
                        <div className="bg-bar">
                            <div className="greenish-bar txt" style={barStyle}>
                                .
                            </div>
                        </div>
                    )
                } else {
                    if(perc >= 81 && perc <= 100){
                        return(
                            <div className="bg-bar">
                                <div className="green-bar txt" style={barStyle}>
                                    .
                                </div>
                            </div>
                        )
                    }
                }
            }
        }
    }
    
    
}


export default ProgressBar
