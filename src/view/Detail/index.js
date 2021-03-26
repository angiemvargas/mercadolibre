import React from 'react'
import Search from '../Search'
import Result from './Result'

const DetailProduct = () =>{

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