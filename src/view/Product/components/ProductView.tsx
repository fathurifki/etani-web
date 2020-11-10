import * as React from 'react';
import { useLocation } from 'react-router';
import { ProductContext } from '../controller';
import image from 'src/assets/image';

const ProductView = () => {
    const controller = React.useContext(ProductContext)
    const [state, setState] = React.useState(false)
    const [message, setMessage] = React.useState("")

    const { getDetail } = controller
    const location: any = useLocation()

    console.log('STATE', state)

    const renderComponent = location.state.product.map((val: any) => {
        const imageSource = 'https://' + val.productImage
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
            <div className="bg-white shadow rounded hover:shadow-lg transition duration-200 transform hover:-translate-y-2 overflow-hidden my-2" onClick={() => getDetail(val._id)}>
                <img alt="imageProp" src={state === true ? image.default : imageSource} className="h-48 w-full object-cover object-center"></img>
                <div className="w-full flex flex-col">
                    <h3 className="font-bold text-gray-700 w-full text-center mt-1 cursor-default text-lg">{val.name}</h3>
                    <p className="p-3 pt-1 cursor-default">Description : {val.description}</p>
                    <p className="p-3 pt-1 cursor-default">Stock : {val.stock}</p>
                    <p className="p-3 pt-1 cursor-default">Berat : {val.weight} kg</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 m-2 focus:outline-none rounded">Look</button>
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-wrap px-4 ">
            {renderComponent}
        </div>
    );
}

export default ProductView