import * as React from 'react';
import image from '../../assets/image';
import history from '../../utils/browserHistory'

const Header = ({ showMenu, path }: any) => {
    return (
        <React.Fragment>
            <div className="relative bg-green-500 w-full h-16">
                {
                    showMenu ?
                        <div className="flex flex-row h-full p-4">
                            <div onClick={() => history.goBack()} className="cursor-pointer flex flex-col justify-center items-center pr-6">
                                <img src={image.back} width={20} alt="icon"></img>
                            </div>
                            <span className="font-bold text-white flex flex-col justify-center">{path}</span>
                        </div> :
                        <div className="flex flex-row w-full h-16 justify-center items-center">
                            <span className="flex flex-col">E-Tani</span>
                        </div>
                }
            </div>
        </React.Fragment>
    )
}

export default Header