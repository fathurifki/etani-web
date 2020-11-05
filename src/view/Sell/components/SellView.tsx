import * as React from 'react';
import { SellContext } from '../controller';

const SellView = () => {
    const controller = React.useContext(SellContext)
    const { handleInput, imagePreviewUrl, handleImageUpload, submitData } = controller

    return (
        <div className="flex flex-col m-auto">
            <div className="space-y-2 p-4 overflow-auto">
                <div className="flex flex-row justify-center rounded">
                    <img className="rounded" src={imagePreviewUrl} alt="icon" height={100} width={150}></img>
                </div>
                <div className="flex flex-row justify-center">
                    <input onChange={(e) => handleImageUpload(e)} type="file" name="file" className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"></input>
                </div>
                <br />
                <span>Nama Barang</span>
                <input name="name" className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" onChange={(e) => handleInput(e)}></input>
                <br />
                <span>Kategori</span>
                <div>
                    <select name="category" onChange={(e) => handleInput(e)} className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                        <option>Kategori</option>
                        <option>Palawija</option>
                        <option>Beras</option>
                    </select>
                </div>
                <br />
                <span className="mt-2">Harga</span>
                <input name="price" onChange={(e) => handleInput(e)} className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                <br />
                <span className="mt-2">Stock</span>
                <input name="stock" onChange={(e) => handleInput(e)} className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                <br />
                <span className="mt-2">Berat</span>
                <input name="weight" onChange={(e) => handleInput(e)} className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"></input>
                <br />
                <span className="mt-2">Deskripsi</span>
                <textarea name="description" onChange={(e) => handleInput(e)} className="bg-gray-100 rounded border border-gray-400 leading-normal border-2     resize-none w-full h-20 py-2 px-3 shadow-md font-medium placeholder-gray-500 focus:outline-none focus:bg-white"></textarea>
            </div>

            <div onClick={() => submitData()} className="absolute bottom-0 bg-blue-400 w-full h-16 flex flex-col justify-center items-center">
                <span>Sell</span>
            </div>
        </div >
    );
}

export default SellView