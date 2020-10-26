import * as React from 'react';

const Profile = () => {
    return (
        <div>
            <div className="flex flex-col p-4 space-y-2">
                <span>Nama</span>
                <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Nomor HP</span>
                <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Alamat</span>
                <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Kota</span>
                <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Bank 1</span>
                <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>No. Rekening</span>
                <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Bank 2</span>
                <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>No. Rekening 2</span>
                <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>

                <div className="flex flex-row justify-between">
                    <button className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline">History Pembayaran</button>
                    <button className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline">Edit</button>
                    <button className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">Save</button>
                </div>

            </div>
        </div>
    );
}

export default Profile