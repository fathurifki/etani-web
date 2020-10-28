import * as React from 'react';
import { AuthController } from './controller';
import LoginView from './components/LoginView';


const Login = () => {
    return (
        <AuthController>
            <LoginView />
        </AuthController>
    )
}

export default Login