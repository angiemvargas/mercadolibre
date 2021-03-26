import './Card.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({onClick, id, image, nombre, precio, vendedor, object}) => {

    return(
        <Link to={`./detail/${id}`}>
        <div className="tarjeta">
            <div className="tarjeta__imagen">
                <img width="160" height="160" src={image}></img>
            </div>
            <div className="tarjeta__info">
                <div className="tarjeta__info--nombre">{nombre}</div>
                <div className="tarjeta__info--precio">${precio} COP</div>
                <div className="tarjeta__info--vendedor">{vendedor}</div>
            </div>
        </div> 
        </Link>
    )
}

export default Card;