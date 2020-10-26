import * as React from 'react';

const Sell = () => {
    return (
        <div className="flex flex-col relative m-auto overflow-auto">
            <div className="space-y-2 p-4">
                <div className="flex flex-row justify-center rounded">
                    <img className="rounded" src="https://picsum.photos/200" alt="icon" height={30} width={150}></img>
                </div>
                <div className="flex flex-row justify-center">
                    <label
                        htmlFor="fileInput"
                        typeof="button"
                        className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex flex-shrink-0 w-6 h-6 -mt-1 mr-1" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                            <path d="M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2" />
                            <circle cx="12" cy="13" r="3" />
                        </svg>
                        Browse Photo
                </label>
                </div>
                <br />
                <span>Nama Barang</span>
                <input className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                <br />
                <span>Kategori</span>
                <div>
                    <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                        <option>Choose a color</option>
                        <option>Red</option>
                        <option>Blue</option>
                        <option>Yellow</option>
                        <option>Black</option>
                        <option>Orange</option>
                        <option>Purple</option>
                        <option>Gray</option>
                        <option>White</option>
                    </select>
                </div>
                <br />
                <span className="mt-2">Harga</span>
                <input className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                <br />
                <span className="mt-2">Stock</span>
                <input className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                <br />
                <span className="mt-2">Berat</span>
                <input className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                <br />
                <span className="mt-2">Deskripsi</span>
                <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal border-2     resize-none w-full h-20 py-2 px-3 shadow-md font-medium placeholder-gray-500 focus:outline-none focus:bg-white"></textarea>

            </div>
            {/* <div className="absolute bottom-0 left-0 right-0 bg-white w-full">
                <span>Button</span>
            </div> */}
        </div>
    );
}

export default Sell