import React from 'react'
import ProductContext from '../../context/Product'
import Card from '../Card/index'
import './Result.css'

const Result = ()=>{
    const contextProduct = React.useContext(ProductContext)
    const [list, setList] = React.useState([])

    React.useEffect(() => {
        setList(contextProduct.state.result)
    }, [contextProduct.state.result])

    return(
        <div className="container is-fluid">
            <div className="tarjet is-multiline">
                <div className="columns is-multiline">
                {list.data?.map(objeto => (
                    <div className ="resultados tarjeta" key={objeto.id}>
                        <Card
                            id={objeto.id}
                            image={objeto.imagenPequeña}
                            nombre={objeto.nombre}
                            precio={objeto.precio}
                            object={objeto}
                        />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Result