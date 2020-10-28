import * as React from 'react';
import agent from '../../utils/agent';

interface InitialState {

}

const initialState = {

}

export const HomeContext = React.createContext<InitialState>(initialState)
export const { Provider: HomeProvider } = HomeContext

export const HomeController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)

    React.useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        try {
            const data = await agent.Category.get('beras')
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <HomeProvider value={{ ...state }}>
            {children}
        </HomeProvider>
    )
}