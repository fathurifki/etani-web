import * as React from 'react';
import { CartContext } from '../controller';

const CartView = () => {
    const controller = React.useContext(CartContext)
    const { fetchCartCatalog, cartCatalog, handleCheckout, handleDeleteCart } = controller
    const [state, setState] = React.useState([])

    const addCart = (val: any) => {
        const selectedId = state.findIndex(item => item === val);
        if (selectedId === -1) {
            setState(v => v.concat(val))
        } else {
            setState(v => v.filter(item => item !== val))
        }
    }

    React.useEffect(() => {
        fetchCartCatalog()
    }, [])

    const renderComponent = cartCatalog.map((val: any) => {
        return (
            <div className="flex flex-row justify-between rounded bg-white p-4">
                <div className="flex flex-row justify-center items-center">
                    <input type="checkbox" onChange={() => addCart(val._id)}></input>
                </div>
                <div className="flex flex-col space-y-2">
                    <p>ID : {val._id}</p>
                    <p>Barang : {val.product_name}</p>
                    <p>Jumlah : {val.amount}</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <button onClick={() => handleDeleteCart(val._id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-2">Hapus</button>
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col">
            <div className="h-full relative space-y-4 p-4">
                {renderComponent}
            </div>
            <div onClick={() => handleCheckout(state)} className="absolute bottom-0 bg-blue-400 w-full h-16 flex flex-col justify-center items-center">
                <span>Checkout</span>
            </div>
        </div >
    );
}

export default CartView