/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import agent from '../../utils/agent';
import history from '../../utils/browserHistory'

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
    getProduct: Function
    loading: any
    product: any
    errMessage: any
    user_id: any
    user: InitialUser
}

const initialState = {
    getProduct: () => { },
    product: [],
    loading: false,
    user_id: null,
    errMessage: "",
    user: {
        name: '',
        phone_number: null,
        address: '',
        city: '',
        rekening_name1: '',
        rekening_number1: null,
        rekening_name2: '',
        rekening_number2: null,
    },
}

export const HomeContext = React.createContext<InitialState>(initialState)
export const { Provider: HomeProvider } = HomeContext

export const HomeController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)

    console.log('state', state.user)

    React.useEffect(() => {
        fetchProfile()
    }, [])

    const fetchProfile = async () => {
        setState({
            ...state,
            loading: true
        })
        try {
            const res = await agent.Profile.getProfile()
            setState((prevState) => ({
                ...prevState,
                loading: false,
                user_id: res && res.user_id,
                user: {
                    ...prevState.user,
                    name: res && res.name,
                    phone_number: res && res.phone_number,
                    address: res && res.address,
                    city: res && res.city,
                    rekening_name1: res && res.rekening_name1,
                    rekening_number1: res && res.rekening_number1,
                    rekening_name2: res && res.rekening_name2,
                    rekening_number2: res && res.rekening_number2,
                },
            }))
            return res
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errMessage: error
            })
        }
    }

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
        } catch (error) {
            setState({
                ...state,
                loading: false,
                product: []
            })
        }
    }

    return (
        <HomeProvider value={{ ...state, getProduct: getProduct }}>
            {children}
        </HomeProvider>
    )
}