import * as React from 'react';
import image from '../../assets/image';
import history from '../../utils/browserHistory'

const Header = ({ showMenu, path }: any) => {
    const stateHistory = () => {
        if (path.toString() === "HOME") {
            history.push('/home')
        } else if (path.toString() === "SELL") {
            history.push('/home')
        } else if (path.toString() === "CART") {
            history.push('/home')
        } else if (path.toString() === "PROFILE") {
            history.push('/home')
        } else {
            history.goBack()
        }
    }
    return (
        <React.Fragment>
            <div className="relative bg-green-500 w-full h-16">
                {
                    showMenu ?
                        <div className="flex flex-row h-full p-4">
                            <div onClick={() => stateHistory()} className="cursor-pointer flex flex-col justify-center items-center pr-6">
                                <img src={image.back} width={20} alt="icon"></img>
                            </div>
                            <span className="font-bold text-white flex flex-col justify-center">{path}</span>
                        </div> :
                        <div className="flex flex-row w-full h-16 justify-center items-center">
                            <img alt="icon" src={image.headerLogo} width={50} height={50}></img>
                        </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Header