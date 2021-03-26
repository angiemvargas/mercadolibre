import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Product from './view/Detail'
import Detail from './view/Product'

const Routes = () =>{
    return(
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Product}>
            </Route>
            <Route path="/detail/:id" component={Detail}>
            </Route>
          </Switch>
        </BrowserRouter>
    )
}

export default Routes;