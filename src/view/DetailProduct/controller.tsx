import * as React from 'react';
import agent from '../../utils/agent';


interface InitialState {
    amount: any
    loading: boolean
    handleSubmit: Function
    handleInput: Function
}

const initialState = {
    amount: null,
    loading: false,
    handleSubmit: () => { },
    handleInput: () => { },
}

export const DetailContext = React.createContext<InitialState>(initialState)
export const { Provider: DetailProvider } = DetailContext

export const DetailController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)

    const handleInput = (val: any) => {
        const value = val.target.value
        const name = val.target.name

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }


    const handleSubmit = async (id: number) => {
        const payload = { product_id: id, amount: state.amount }
        try {
            const data = await agent.Cart.postCart(payload)
            console.log('data', data)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <DetailProvider value={{ ...state, handleSubmit: handleSubmit, handleInput: handleInput }}>
            {children}
        </DetailProvider>
    )
}