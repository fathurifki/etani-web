/* eslint-disable jsx-a11y/accessible-emoji */
import * as React from 'react';
import history from '../../utils/browserHistory'
const Footer = () => {

    const stateHistory = (params: string) => {
        if (params === 'home') {
            history.push('/home')
        } else if (params === 'sell') {
            history.push('/sell')
        } else if (params === 'cart') {
            history.push('/cart')
        } else if (params === 'profile') {
            history.push('/profile')
        }
    }

    return (
        <React.Fragment>
            <div className="flex space-x-12 flex-row bg-white w-full h-16 justify-center items-center">
                <div onClick={() => stateHistory('home')} className="flex rounded-md w-14 flex-col justify-center items-center p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <span>🏠</span>
                    <span> Home</span>
                </div>
                <div onClick={() => stateHistory('sell')} className="flex rounded-md w-14 flex-col justify-center items-center  p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <span>💲</span>
                    <span> Sell</span>
                </div>
                <div onClick={() => stateHistory('cart')} className="flex rounded-md w-14 flex-col justify-center items-center  p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <span>🛒</span>
                    <span> Cart</span>
                </div>
                <div onClick={() => stateHistory('profile')} className="flex rounded-md w-14 flex-col justify-center items-center  p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <span>📔</span>
                    <span> Profile</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer