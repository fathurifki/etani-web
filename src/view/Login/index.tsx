import * as React from 'react';

const Login = () => {
    return (
        <div>
            <div className="container max-w-full mx-auto py-24 px-6">
                <div className="flex flex-col">
                    <span>Username</span>
                    <input className="ext-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                    <br/>
                    <p>Password</p>
                    <input className="ext-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                </div>
                    <br/>
                <button className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg
                px-6 py-3 block shadow-xl hover:text-white hover:bg-black">Login</button>
                <span className="flex flex-col justify-center items-center mt-5">Belum Punya Akun ? Daftar Disini</span>
            </div>
        </div>
    );
}

export default Login