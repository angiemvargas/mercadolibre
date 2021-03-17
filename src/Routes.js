import React from 'react'
import {Route, Switch } from 'react-router-dom'
import DetailProduct from './view/Detail'

const Routes = () =>{
    return(
        <Switch>
            <Route component={DetailProduct}/>
        </Switch>
    )
}

export default Routes;