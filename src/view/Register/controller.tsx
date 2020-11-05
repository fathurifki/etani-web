import * as React from 'react';
import agent from '../../utils/agent';

interface InitialState {
    handleInput: Function
    handleSubmit: Function
    email: string
    password: string
}

const initialState = {
    handleInput: () => { },
    handleSubmit: () => { },
    email: "",
    password: ""
}

export const RegisterContext = React.createContext<InitialState>(initialState)
export const { Provider: RegisterProvider } = RegisterContext

export const RegisterController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)

    const handleInput = (e: any) => {
        const value = e.target.value
        const name = e.target.name

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        const { email, password } = state
        const payload = { email, password }
        try {
            const data = await agent.Register.post(payload)
            console.log('data', data)
        } catch (error) {
            console.log('eeror', error)
        }
    }


    return (
        <RegisterProvider value={{ ...state, handleInput: handleInput, handleSubmit: handleSubmit }}>
            {children}
        </RegisterProvider>
    )
}