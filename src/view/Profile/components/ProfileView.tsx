import * as React from 'react';
import { ProfileContext } from '../controller';

const ProfileView = () => {
    const controller = React.useContext(ProfileContext)
    const {
        fetchHistoryPayment,
        handleInput,
        fetchProfile,
        dataProfile,
        user,
        handleUpdateProfile,
        handleCreateProfile,
        logout
    } = controller
    const [state, setState] = React.useState({
        buttonInput: false
    })

    const actionButton = () => {
        if (Object.keys(dataProfile).length === 0) {
            const res = handleCreateProfile()
            setState((prevState) => ({
                ...prevState,
                buttonInput: false
            }))
            if (res.status === 200) {
                window.location.reload()
                fetchProfile()
            }
        } else {
            const res = handleUpdateProfile()
            setState((prevState) => ({
                ...prevState,
                buttonInput: false
            }))
            if (res.status === 200) {
                window.location.reload()
                fetchProfile()
            }
        }
    }

    return (
        <div>
            <div className="flex flex-col p-4 space-y-2">
                <span>Nama</span>
                <input name="name" onChange={(e) => handleInput(e)} disabled={state.buttonInput === false} value={user.name} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Nomor HP</span>
                <input name="phone_number" onChange={(e) => handleInput(e)} disabled={state.buttonInput === false} value={user.phone_number} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Alamat</span>
                <input name="address" onChange={(e) => handleInput(e)} disabled={state.buttonInput === false} value={user.address} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Kota</span>
                <input name="city" onChange={(e) => handleInput(e)} disabled={state.buttonInput === false} value={user.city} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Bank 1</span>
                <input name="rekening_name1" onChange={(e) => handleInput(e)} disabled={state.buttonInput === false} value={user.rekening_name1} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>No. Rekening</span>
                <input name="rekening_number1" onChange={(e) => handleInput(e)} disabled={state.buttonInput === false} value={user.rekening_number1} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>Bank 2</span>
                <input name="rekening_name2" onChange={(e) => handleInput(e)} disabled={state.buttonInput === false} value={user.rekening_name2} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>
                <span>No. Rekening 2</span>
                <input name="rekening_number2" onChange={(e) => handleInput(e)} disabled={state.buttonInput === false} value={user.rekening_number2} className="shadow appearance-none border rounded py-2 px-3 text-grey-darker"></input>

                <div className="flex flex-row justify-between">
                    <button onClick={() => fetchHistoryPayment()} className="border border-indigo-500 text-indigo-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-indigo-600 focus:outline-none focus:shadow-outline">History Pembayaran</button>
                    {
                        !state.buttonInput ?
                            null :
                            <button onClick={() => actionButton()} className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline">Save</button>

                    }
                    {
                        <button onClick={() => setState({
                            ...state,
                            buttonInput: true
                        })} className="border border-gray-700 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-gray-800 focus:outline-none focus:shadow-outline">{user.name === null ? 'Create' : 'Edit'}</button>
                    }
                </div>
                <div className="flex flex-row justify-between">
                    <button onClick={() => logout()} className="border border-red-500 text-black rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline">Logout</button>
                </div>
            </div>
        </div >
    );
}

export default ProfileView