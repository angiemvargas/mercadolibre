import React from 'react'
import { getListProduct } from '../service/Product'
import ProductContext from '../context/Product'

const Product = ({children}) => {

    const [result, setResult] = React.useState([])
    const [state, setState] = React.useState({data:[]})
    const [objeto, setObjeto] = React.useState('')

    const changeObjeto = (object) => {
        setObjeto(object)
    }

    const callService = object => {
        //getListProduct(object).then(result => {setResult(result)})
        //console.log("valor resultado",result);
        //setResult(ProductService.getListProduct(object))
        getListProduct(objeto).then(data => setResult({data: data}))
    }

    /*React.useEffect(()=>{
        getListProduct(objeto).then(data => setResult({data: data}))
    }, [objeto])*/

    //console.log("state", result);

    /*React.useEffect(()=>{
        getListProduct(object).then(data => setState({data: data}))
    }, [])*/

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