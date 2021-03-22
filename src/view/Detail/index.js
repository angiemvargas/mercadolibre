import React from 'react'
import Search from '../Search'
import Result from './Result'
import ProductContext from '../../context/Product'

const DetailProduct = () =>{
    const contextProduct = React.useContext(ProductContext)

    return(
        <div  className="container is-fluid">
            <div className="dplayout">
            <Search></Search>
            <Result></Result>
            </div>
        </div>
    )
}

export default DetailProduct;