import React from 'react'
import ProductContext from '../../context/Product'
import Card from '../Card/index'
import './Result.css'

const Result = ()=>{
    const contextProduct = React.useContext(ProductContext)
    let list = []

    React.useEffect(() => {
        list = contextProduct.state.result
        console.log("list", list);
    }, [contextProduct.state.result])

    return(
        <div className="container is-fluid">
            <div className="tarjet is-multiline">
                <div className="columns is-multiline">
                {list.data?.map(objeto => (
                    <div className ="resultados tarjeta" key={objeto.id}>
                        <Card
                            image={objeto.imagenPequeña}
                            nombre={objeto.nombre}
                            precio={objeto.precio}
                            //vendedor="Angie"
                        />
                        <h1>holaaaa</h1>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Result