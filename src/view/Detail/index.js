import React from 'react'
import Search from '../Search'
import Card from '../Card'
import Logo from '../Logo.png'

const DetailProduct = () =>{
    return(
        <div  className="container is-fluid">
            <div className="dplayout">
            <Search></Search>
            <Card 
            image={Logo}
            nombre="Tarro"
            precio="5000"
            vendedor="Angie"
            ></Card>
            </div>
        </div>
    )
}

export default DetailProduct;