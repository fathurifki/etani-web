import * as React from 'react';
import agent from '../../utils/agent';
import { setCredential } from '../../utils/cookies';


interface InitialState {
    data: any,
    email: string,
    password: string,
    loading: boolean,
    click: Function,
    handleInput: Function,
    handleLogin: Function,
}

const initialState = {
    data: {},
    click: () => { },
    email: "",
    password: "",
    loading: false,
    handleInput: () => { },
    handleLogin: () => { }
}

export const AuthContext = React.createContext<InitialState>(initialState)
export const { Provider: AuthProvider } = AuthContext

export const AuthController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState);
    const { email, password } = state

    const click = () => {
        alert('clicked')
    }

    const handleInput = (val: any) => {
        const value = val.target.value
        const name = val.target.name

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = async () => {
        setState({
            ...state,
            loading: true
        })
        try {
            const fetchData = await agent.Login.post('/login', { email, password })
            await setCredential({ token: fetchData.body.token })
            setState({
                ...state,
                loading: false
            })
            console.log('FETCH', fetchData.body.token)
            console.log('FETCH2', fetchData)

        } catch (error) {
            setState({
                ...state,
                loading: false
            })
            console.log('Errro', error)
        }
    }



    return (
        <AuthProvider value={{ ...state, click: click, handleInput: handleInput, handleLogin: handleLogin }}>
            {children}
        </AuthProvider>
    )
}