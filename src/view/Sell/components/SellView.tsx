/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-array-constructor */
import React from 'react';
import { SellContext } from '../controller';
import ReactLoading from 'react-loading';
import Camera, { FACING_MODES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import { isMobile } from 'src/utils/mobileView';
import image from 'src/assets/image';

const SellView = () => {
    const controller = React.useContext(SellContext)
    const { handleInput, imagePreviewUrl, handleImageUpload, submitData, loading, handleImageMobileUpload } = controller
    const [idealFacingMode, setIdealFacingMode] = React.useState<any>(null);
    const [isMaxResolution, setIsMaxResolution] = React.useState<any>(false);
    const mobileView = isMobile();

    const dataURItoBlob = (dataURI: any) => {
        let byteString,
            mimestring

        if (dataURI.split(',')[0].indexOf('base64') !== -1) {
            byteString = atob(dataURI.split(',')[1])
        } else {
            byteString = decodeURI(dataURI.split(',')[1])
        }

        mimestring = dataURI.split(',')[0].split(':')[1].split(';')[0]

        var content = new Array();
        for (var i = 0; i < byteString.length; i++) {
            content[i] = byteString.charCodeAt(i)
        }

        return new Blob([new Uint8Array(content)], { type: mimestring });
    }

    const handleTakePhoto = (dataUri: any) => {
        // Do stuff with the photo...
        const data = dataURItoBlob(dataUri)
        handleImageMobileUpload(data)
    }


    const renderButtons = () => {
        return (
            <div className="flex flex-row justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" onClick={(e) => {
                    setIdealFacingMode(FACING_MODES.USER);
                    setIsMaxResolution(false);
                }}> Front Camera </button>

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full" onClick={(e) => {
                    setIdealFacingMode(FACING_MODES.ENVIRONMENT);
                    setIsMaxResolution(true);
                }}> Rear Camera</button>
            </div>
        );
    }
    return (
        <div className="flex flex-col h-screen">
            <div className="space-y-2 p-4 overflow-auto">
                {
                    mobileView === true ?
                        <React.Fragment>
                            <Camera
                                onTakePhoto={(dataUri) => { handleTakePhoto(dataUri) }}
                                idealFacingMode={idealFacingMode}
                            />
                            {renderButtons()}
                        </React.Fragment> : null
                }
                {
                    mobileView === true ? null :
                        <React.Fragment>
                            <div className="flex flex-row justify-center rounded">
                                <img className="rounded" src={imagePreviewUrl ? imagePreviewUrl : image.default} alt="iconImage" height={150} width={150}></img>
                            </div>
                            <div className="flex flex-row justify-center">
                                <input onChange={(e) => handleImageUpload(e)} type="file" name="file" className="cursor-pointer inine-flex justify-between items-center focus:outline-none border py-2 px-4 rounded-lg shadow-sm text-left text-gray-600 bg-white hover:bg-gray-100 font-medium"></input>
                            </div>
                        </React.Fragment>
                }
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
                {
                    loading === true ? <ReactLoading className="mb-5" type="spokes" color="#fff" height={'6%'} width={'6%'} /> :
                        <span>Sell</span>
                }
            </div>
        </div >
    );
}

export default SellView