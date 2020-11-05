import * as React from 'react';
import RegisterView from './components/RegisterView';
import { RegisterController } from './controller';

const Register = () => {
    return (
        <RegisterController>
            <RegisterView />
        </RegisterController>
    )
}

export default Register