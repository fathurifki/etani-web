import * as React from 'react';
import agent from '../../utils/agent';
import history from '../../utils/browserHistory'

interface InitialState {
    loading: Boolean
    fetchProfile: Function
    fetchHistoryPayment: Function
    dataProfile: any
    errMessage: any
}

const initialState = {
    fetchProfile: () => { },
    fetchHistoryPayment: () => { },
    loading: false,
    dataProfile: {},
    errMessage: "",

}


export const ProfileContext = React.createContext<InitialState>(initialState)
export const { Provider: ProfileProvider } = ProfileContext

export const ProfileController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)

    React.useEffect(() => {
        fetchProfile()
    }, [])


    const fetchProfile = async () => {
        setState({
            ...state,
            loading: true
        })
        try {
            const data = await agent.Profile.getProfile()
            setState({
                ...state,
                loading: false,
                dataProfile: data
            })
        } catch (error) {
            console.log('Errror', error)
        }
    }

    const fetchHistoryPayment = async () => {
        setState({
            ...state,
            loading: true,
        })
        try {
            const data = await agent.Payment.get()
            setState({
                ...state,
                loading: false,
            })
            history.push({
                pathname: '/payment-status',
                state: { payment: data }
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errMessage: error
            })
        }
    }

    

    return (
        <ProfileProvider value={{ ...state, fetchHistoryPayment: fetchHistoryPayment }}>
            {children}
        </ProfileProvider>
    )
}