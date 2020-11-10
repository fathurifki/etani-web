import * as React from 'react';
import { useLocation } from 'react-router';
import { DetailContext } from '../controller';
import image from 'src/assets/image';

const DetailProductView = () => {
    const { handleSubmit, handleInput } = React.useContext(DetailContext)
    const [state, setState] = React.useState(false)
    const [message, setMessage] = React.useState("")

    const location: any = useLocation()
    const data = location.state.detail
    const imageSource = 'https://' + data.productImage
    const checkingFetchImage = (val: any) => {
        fetch(val, { method: 'HEAD' })
            .then(res => {
                if (res.ok) {
                    setMessage('Image Exist')
                } else {
                    setState(true)
                }
            }).catch(err => setMessage(err));
    }
    checkingFetchImage(imageSource)
    return (
        <div className="flex flex-col h-screen">
            <div>
                <div className="flex flex-row justify-center">
                    <div className="flex flex-col py-4">
                        <img src={state === true ? image.default : imageSource} width={250} height={150} alt="icon"></img>
                    </div>
                </div>
                <p className="text-center text-xl font-bold p-2">{data.name}</p>
                <span className="p-4 text-xl font-bold ">Informasi Produk</span>
                <div className="flex flex-col space-y-4 p-4 text-xl">
                    <p>Harga : {data.price}</p>
                    <p>Stock : {data.stock}</p>
                    <p>Berat : {data.weight}</p>
                    <p>Kategori : {data.category}</p>
                    <p>Description : {data.description}</p>
                </div>
                <div className="p-2 mb-4">
                    <p>Jumlah</p>
                    <input onChange={(e) => handleInput(e)} name="amount" className="ext-md block px-3 py-2  rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none" ></input>
                </div>
            </div>
            <div onClick={() => handleSubmit(data._id)} className="absolute bottom-0 bg-blue-400 w-full h-16 flex flex-col justify-center items-center">
                <span>Buy</span>
            </div>
        </div>
    );
}

export default DetailProductView