/* eslint-disable jsx-a11y/accessible-emoji */
import * as React from 'react';
import { AuthContext } from '../controller';
import history from '../../../utils/browserHistory';
import image from 'src/assets/image';

const LoginView = () => {

    const controller = React.useContext(AuthContext)
    const [state, setState] = React.useState(false)
    const { handleInput, handleLogin } = controller

    return (
        <div>
            <div className="container max-w-full mx-auto py-24 px-6">
                <div className="flex flex-row justify-center items-center">
                <img alt="icon" src={image.logo} width={150} height={100}></img>
                </div>
                <div className="flex flex-col">
                    <span>Username</span>
                    <input name="email" className="ext-md block px-3 py-2 rounded-lg w-full 
                        bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                        onChange={(e) => handleInput(e)}></input>
                    <br/>
                    <p>Password</p>
                    <div className="flex flex-row">
                    <input type={state ? "text" : "password"}  name="password" className="ext-md block px-3 py-2  rounded-lg w-full 
                    bg-white mr-2 border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
                    onChange={(e) => handleInput(e)}></input>
                    <button role="img" aria-label="eye" onClick={() => setState(!state)}>👁️</button>
                    </div>
                    </div>
                    <br/>
                <button className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick={() => handleLogin()} >Login</button>
                <span className="flex flex-row justify-center items-center mt-5">Belum Punya Akun ? <span className="underline ml-2" onClick={() => history.push('/register')}>Daftar Disini</span></span>
            </div>
        </div>
    );
}

export default LoginView