import React from 'react'
import './Tiles.css';


function Tiles({title, image, link}) {
    return (
        <div className="_tile">
            <h3>{title}</h3>
            <div>
                <img className="_tile__image" src={image} alt="" />
            </div>
            <a className="_tile__link" href="#">{link}</a>
        </div>
    )
}

export default Tiles
