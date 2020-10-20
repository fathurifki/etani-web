import * as React from 'react';
import { Route } from 'react-router'
import Login from './Login';
import Register from './Register';
import Home from './Home';
import DetailProduct from './DetailProduct';
import Cart from './Cart';
import Sell from './Sell';
import Product from './Product';

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/detail-product',
        component: DetailProduct
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/sell',
        component: Sell 
    },

]

const handleRouter = () => {
    return (
        <div>
            {routes.map(({ path, component }, key) => 
                <Route 
                  exact 
                  path={path} 
                  component={component} 
                  key={key} 
                />
            )}
        </div>
    )
}

export default handleRouter