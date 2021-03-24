import React from 'react'

const ProductContext = React.createContext({
    state:{
        result: [],
        objeto: ''
    },
    actions:{
        callService(object){},
        changeObjeto(object){}
    }
})

export default ProductContext;