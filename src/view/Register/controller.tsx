import * as React from 'react';
import agent from '../../utils/agent';
import history from '../../utils/browserHistory';

interface InitialState {
    handleInput: Function
    handleSubmit: Function
    loading: any
    email: string
    password: string
    errorMessage: string
}

const initialState = {
    handleInput: () => { },
    handleSubmit: () => { },
    loading: false,
    email: "",
    password: "",
    errorMessage: ""
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
        setState({
            ...state,
            loading: true
        })
        try {
            const data = await agent.Register.post(payload)
            setState({
                ...state,
                loading: false
            })
            if (data.status === 200) {
                history.push('/login')
            }
        } catch (error) {
            if (error.status === 400) {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: 'Email Telah Terdaftar'
                })
            }
        }
    }


    return (
        <RegisterProvider value={{ ...state, handleInput: handleInput, handleSubmit: handleSubmit }}>
            {children}
        </RegisterProvider>
    )
}