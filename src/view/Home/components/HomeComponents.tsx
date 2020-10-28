import * as React from 'react';
import { getToken } from '../../../utils/cookies';

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
    const dataRenderComponent = data.map((val) => {
        return (
            <div className="border-gray-400 flex flex-row mb-2">
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
                {dataRenderComponent}
            </div>
        </div>
    );
}

export default HomeView