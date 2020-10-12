import * as React from 'react';
import { Route } from 'react-router'
import Login from './Login';
import Register from './Register';

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
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