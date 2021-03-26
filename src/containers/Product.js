import React from 'react'
import Service from '../service/Product'
import ProductContext from '../context/Product'

const Product = ({children}) => {

    const [result, setResult] = React.useState([])
    const [objeto, setObjeto] = React.useState('')

    const changeObjeto = (object) => {
        setObjeto(object)
    }

    const callService = object => {
        Service.getListProduct(objeto).then(obj => {
            
            const listProduct = obj.map(data => {
                return {
                    id: data.id,
                    nombre: data.title,
                    imagenPequeña: data.thumbnail,
                    precio: data.price,
                    imagenGrande: Service.getBigImage(data.id).then(img => img),
                    vendedor: Service.getNameSeller(data.seller.id).then(data => data),
                    cantidad: data.available_quantity
                }
            })
            
            setResult({data: listProduct})})
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