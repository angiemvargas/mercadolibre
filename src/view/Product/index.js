import React from 'react'
import './Product.css'

const ProductDetail = ({image, nombre, precio, vendedor, cantidad}) =>  {

    return(
        <div className="product__detail">
            <div className="pd__imagen">
            <img src={image}></img>
        </div>
        <div className="pd__info">
            <div className="pd__info--nombre">{nombre}</div>
            <div className="pd__info--precio">${precio} COP</div>
            <div className="pd__info--cantidad">Unidades disponibles: {cantidad}</div>
            <div className="pd__info--vendedor">Vendedor: {vendedor}</div>
            <button className="pd__info--agregar">Comprar</button>
        </div>
        </div>
    )
}

export default ProductDetail