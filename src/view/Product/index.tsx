import * as React from 'react';

const Product = () => {
    return (
        <div className="flex flex-wrap px-4 ">
            <div className="bg-white shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden my-2">
                <img src="https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80" className="h-48 w-full object-cover object-center"></img>
                <div className="w-full flex flex-col">
                    <h3 className="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">My Name</h3>
                    <p className="p-3 pt-1 cursor-default">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias?</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded">Look</button>
                </div>
            </div>
        
            <div className="bg-white shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden my-5">
                <img src="https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80" className="h-48 w-full object-cover object-center"></img>
                <div className="w-full flex flex-col">
                    <h3 className="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">My Name</h3>
                    <p className="p-3 pt-1 cursor-default">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias?</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded">Look</button>
                </div>
            </div>

            <div className="bg-white shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden my-5">
                <img src="https://images.unsplash.com/photo-1597652578663-963b7a8a5de1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80" className="h-48 w-full object-cover object-center"></img>
                <div className="w-full flex flex-col">
                    <h3 className="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">My Name</h3>
                    <p className="p-3 pt-1 cursor-default">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, alias?</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded">Look</button>
                </div>
            </div>
            
        </div>
    );
}

export default Product