import React from 'react'
import { Link } from 'react-router-dom'

const MenuBar = () => {
    return (
        
        <div className="sidebar"> 
            <div className="text-light">
                
                        <Link to="/sensores">
                            <div className="list-sensor">
                                <div className="btn btn-secondary m-1">Sensores</div>
                            </div>
                                
                        </Link> 

                        <Link to="/graficas">
                            <div className="list-sensor">
                                <div className="btn btn-secondary m-1">Gráficas</div>
                            </div>
                        </Link>

                        <Link to="/camara">
                            <div className="list-sensor">
                                <div className="btn btn-secondary m-1">Cámara </div>
                            </div>
                        </Link>
                        </div>
                </div>
            
    )
}

export default MenuBar
