/* eslint-disable jsx-a11y/accessible-emoji */
import * as React from 'react';
import { RegisterContext } from '../controller';

const RegisterView = () => {
    const controller = React.useContext(RegisterContext)
    const { handleInput, handleSubmit, errorMessage } = controller
    const [state, setState] = React.useState(false)
    return (
        <div>
             <div className="container max-w-full mx-auto py-24 px-6">
                <div className="flex flex-col space-y-1">
                    <span>Username</span>
                    <input onChange={(e) => handleInput(e)} name="email" className="ext-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                    <br />
                    <p>Password</p>
                    <div className="flex flex-row">
                    <input type={state ? "text" : "password"} onChange={(e) => handleInput(e)} name="password" className="ext-md block px-3 py-2  rounded-lg w-full 
                    bg-white mr-2 border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                    <button role="img" aria-label="eye" onClick={() => setState(!state)}>👁️</button>
                    </div>
                </div>
                    <br />
                <button onClick={() => handleSubmit()} className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">Sign Up</button>
                    <br />
                <span className="flex flex-row justify-center items-center font-bold text-red-500">{errorMessage}</span>
            </div>
        </div>
    );
}

export default RegisterView