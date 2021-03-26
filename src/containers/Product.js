import React from 'react'
import { getListProduct } from '../service/Product'
import ProductContext from '../context/Product'

const Product = ({children}) => {

    const [result, setResult] = React.useState([])
    const [objeto, setObjeto] = React.useState('')

    const changeObjeto = (object) => {
        setObjeto(object)
    }

    const callService = object => {
        getListProduct(objeto).then(data => setResult({data: data}))
    }

    return(
        <ProductContext.Provider
            value={{
                state:{
                    result,
                    objeto
                },
                actions:{
                    callService,
                    changeObjeto
                }
            }}
        >
            {children}
        </ProductContext.Provider>
    )

}

export default Product;