import * as React from 'react';

const DetailProduct = () => {
    return (
        <div className="flex flex-col relative">
            <div className="flex flex-rol justify-center">
                <div className="flex flex-col py-4">
                    <img src="https://picsum.photos/200" alt="icon"></img>
                </div>
            </div>
            <p className="text-center text-xl font-bold p-2">Raja Lele</p>
            <span className="p-4 text-xl font-bold ">Informasi Produk</span>
            <div className="flex flex-col space-y-4 p-4 text-xl">
                <p>Harga :</p>
                <p>Stock :</p>
                <p>Berat :</p>
                <p>Kategori :</p>
                <p>Description :</p>
            </div>
        </div>
    );
}

export default DetailProduct