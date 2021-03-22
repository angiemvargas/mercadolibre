import './Card.css'
import React from 'react'

const Card = ({onClick, image, nombre, precio, vendedor, contenido}) => (
    <div className="tarjeta" onClick={onClick}>
        <div className="tarjeta__imagen">
            <img width="160" height="160" src={image}></img>
        </div>
        <div className="tarjeta__info">
            <div className="tarjeta__info--nombre">{nombre}</div>
            <div className="tarjeta__info--precio">{precio}</div>
            <div className="tarjeta__info--vendedor">{vendedor}</div>
        </div>
    </div> 
)

export default Card;