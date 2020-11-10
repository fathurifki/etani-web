/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import agent from '../../utils/agent';
import history from '../../utils/browserHistory';
import { createContainer } from 'react-tracked';
import { removeCokies } from 'src/utils/cookies';

interface InitialUser {
    name: any
    phone_number: any
    address: string
    city: string
    rekening_name1: string
    rekening_number1: any
    rekening_name2: string
    rekening_number2: any
}
interface InitialState {
    loading: Boolean
    fetchProfile: Function
    fetchHistoryPayment: Function
    handleInput: Function
    handleUpdateProfile: Function
    handleCreateProfile: Function
    logout: Function
    dataProfile: any
    errMessage: any
    user_id: any
    user: InitialUser
}

const initialState = {
    fetchProfile: () => { },
    fetchHistoryPayment: () => { },
    handleInput: () => { },
    handleUpdateProfile: () => { },
    handleCreateProfile: () => { },
    logout: () => { },
    loading: false,
    dataProfile: "",
    errMessage: "",
    user_id: null,
    user: {
        name: '',
        phone_number: null,
        address: '',
        city: '',
        rekening_name1: '',
        rekening_number1: null,
        rekening_name2: '',
        rekening_number2: null,
    }

}


export const ProfileContext = React.createContext<InitialState>(initialState)
export const { Provider: ProfileProvider, Consumer: ProfileConsumer } = ProfileContext

const useValue = () => React.useState<InitialState>(initialState);

const {
    Provider,
    useTracked,
} = createContainer(useValue);

export const ProfileController = ({ children }: any) => {
    const [state, setState] = useTracked()

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
            // console.log('DATA', data)
            setState((prevState) => ({
                ...prevState,
                loading: false,
                user_id: data && data.user_id,
                dataProfile: data,
                user: {
                    ...prevState.user,
                    name: data && data.name,
                    phone_number: data && data.phone_number,
                    address: data && data.address,
                    city: data && data.city,
                    rekening_name1: data && data.rekening_name1,
                    rekening_number1: data && data.rekening_number1,
                    rekening_name2: data && data.rekening_name2,
                    rekening_number2: data && data.rekening_number2,
                }
            }))
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errMessage: error
            })
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


    const handleInput = (e: any) => {
        const value = e.target.value
        const name = e.target.name
        setState((prevState) => ({
            ...prevState,
            user: {
                ...prevState.user,
                [name]: value
            }
        }))
    }

    const handleCreateProfile = async () => {
        const { user } = state
        setState({
            ...state,
            loading: true,
        })
        try {
            const data = await agent.Profile.createProfile(user)
            setState({
                ...state,
                loading: false,
            })
            fetchProfile()
        } catch (error) {
            setState({
                ...state,
                loading: true,
                errMessage: error
            })
        }
    }

    const handleUpdateProfile = async () => {
        const { user, user_id } = state
        setState({
            ...state,
            loading: true,
        })
        try {
            const data = await agent.Profile.updateProfle(user_id, user)
            setState({
                ...state,
                loading: false,
            })
            fetchProfile()
        } catch (error) {
            setState({
                ...state,
                loading: true,
                errMessage: error
            })
        }
    }

    const logout = () => {
        removeCokies()
        history.push('/login')
    }

    return (
        <Provider>
            <ProfileProvider value={{
                ...state,
                fetchHistoryPayment: fetchHistoryPayment,
                handleInput: handleInput,
                handleUpdateProfile: handleUpdateProfile,
                handleCreateProfile: handleCreateProfile,
                logout: logout
            }}>
                {children}
            </ProfileProvider>
        </Provider>
    )
}

export const AppProviderProfile = ({ children }: any) => {
    return (
        <Provider>
            <ProfileController>
                {children}
            </ProfileController>
        </Provider>
    )
};