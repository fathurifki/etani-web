import * as React from 'react';

const Cart = () => {
    return (
        <div className="flex flex-col p-4">
            <div className="flex flex-row justify-between rounded bg-white p-4">
                <div className="flex flex-col space-y-2">
                    <p>Id Barang</p>
                    <p>Jumlah</p>
                    <p>Barang</p>
                </div>
                <div className="flex flex-col">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-2">Hapus</button>
                    <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Checkout</button>
                </div>
            </div>
        </div>
    );
}

export default Cart