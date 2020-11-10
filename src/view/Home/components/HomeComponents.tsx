/* eslint-disable jsx-a11y/accessible-emoji */
import * as React from 'react';
import { HomeContext } from '../controller';

const data = [
    {
        "id": 1,
        "type": "Palawija",
        "image": "https://picsum.photos/200",
    },
    {
        "id": 2,
        "type": "Beras",
        "image": "https://picsum.photos/200"
    }
]

const HomeView = () => {
    const controller = React.useContext(HomeContext)
    const { getProduct, user } = controller
 
    const dataRenderComponent = data.map((val) => {
        return (
            <div className="border-gray-400 flex flex-row mb-2" onClick={() => getProduct(String(val.type).toLowerCase())}>
                <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    <div role="img" className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">🥬</div>
                    <div className="flex-1 pl-1 mr-16">
                        <div className="font-medium">{val.type}</div>
                    </div>
                    <div className="text-gray-600 text-xs">❯</div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className="p-4">
                {
                    user.name === null && user.rekening_name1 === null &&
                    <div className="select-none cursor-pointer  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center bg-red-500 mb-4 text-white text-sm font-bold px-4 py-3" role="alert">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                        <p>Silahkan lengkapi profile untuk berbelanja.</p>
                    </div>
                }
                {dataRenderComponent}
            </div>
        </div>
    );
}

export default HomeView