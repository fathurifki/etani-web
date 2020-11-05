import * as React from 'react';
import agent from '../../utils/agent';
import history from '../../utils/browserHistory'

interface InitialState {
    getProduct: Function
    loading: any
    product: any
}

const initialState = {
    getProduct: () => { },
    product: [],
    loading: false
}

export const HomeContext = React.createContext<InitialState>(initialState)
export const { Provider: HomeProvider } = HomeContext

export const HomeController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)

    const getProduct = async (val: any) => {
        setState({
            ...state,
            loading: true
        })
        try {
            const data = await agent.Category.get(val)
            setState({
                ...state,
                loading: false,
                product: data
            })
            history.push({
                pathname: '/product',
                state: { product: data }
            })
            console.log(data)
        } catch (error) {
            setState({
                ...state,
                loading: false,
                product: []
            })
            console.log(error)
        }
    }

    return (
        <HomeProvider value={{ ...state, getProduct: getProduct }}>
            {children}
        </HomeProvider>
    )
}