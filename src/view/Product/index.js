import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'
import ProductContext from '../../context/Product'

const ProductDetail = () =>  {

    const params = useParams()

    const context = React.useContext(ProductContext);
    const list = context.state.result

    const getProductId = (id) => {
        return list.data.find(product => product.id === id)
    }

    const {imagenPequeña:image, nombre, precio, cantidad} = getProductId(params.id)

    return(
        <div className="product__detail">
            <div className="pd__imagen">
            <img src={image}></img>
        </div>
        <div className="pd__info">
            <div className="pd__info--nombre">{nombre}</div>
            <div className="pd__info--precio">${precio} COP</div>
            <div className="pd__info--cantidad">Unidades disponibles: {cantidad}</div>
            {/* <div className="pd__info--vendedor">Vendedor: {vendedor}</div> */}
            <button className="pd__info--agregar">Comprar</button>
        </div>
        </div>
    )
}

export default ProductDetail