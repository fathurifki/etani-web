import * as React from 'react';
import { RegisterContext } from '../controller';

const RegisterView = () => {
    const controller = React.useContext(RegisterContext)
    const { handleInput, handleSubmit } = controller
    return (
        <div>
             <div className="container max-w-full mx-auto py-24 px-6">
                <div className="flex flex-col space-y-1">
                    <span>Username</span>
                    <input onChange={(e) => handleInput(e)} name="email" className="ext-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                    <br />
                    <p>Password</p>
                    <input onChange={(e) => handleInput(e)} name="password" className="ext-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                </div>
                    <br />
                <button onClick={() => handleSubmit()} className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">Sign Up</button>
            </div>
        </div>
    );
}

export default RegisterView