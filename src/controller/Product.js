import React from 'react'
import axios from 'axios'

function getListProduct(){
    axios.get('https://api.mercadolibre.com/sites/MCO/search', {
        params:{
            q: 'Motorola'
        }
    })
    .then(response => {console.log(response.data)})
    .catch(function (error) {console.log(error)})
}

export default getListProduct;