import * as React from 'react';
import agent from '../../utils/agent';

interface InitialState {
    loading: Boolean
    fetchCartCatalog: Function
    handleCheckout: Function
    handleDeleteCart: Function
    cartCatalog: any
    cartCheckout: any
    responsePayment: any
    errorMessage: string
    deleteMessage: any
}

const initialState = {
    loading: false,
    fetchCartCatalog: () => { },
    handleCheckout: () => { },
    handleDeleteCart: () => { },
    cartCatalog: [],
    cartCheckout: [],
    responsePayment: {},
    deleteMessage: "",
    errorMessage: ""
}

export const CartContext = React.createContext<InitialState>(initialState)
export const { Provider: CartProvider } = CartContext

export const CartController = ({ children }: any) => {
    const [state, setState] = React.useState(initialState)
    const fetchCartCatalog = async () => {
        setState({
            ...state,
            loading: true
        })
        try {
            const data = await agent.Cart.getCart()
            setState({
                ...state,
                loading: false,
                cartCatalog: data
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                cartCatalog: []
            })
        }
    }

    const handleCheckout = async (val: any) => {
        setState({
            ...state,
            loading: true
        })

        try {
            const data = await agent.Cart.patchPayment({ cart_id: val })
            setState({
                ...state,
                loading: false,
                responsePayment: data
            })
            fetchCartCatalog()
            if (data.status === 200) {
                setTimeout(() => window.open(data.body.invoice_url), 3000)
            }
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error
            })
        }
    }

    const handleDeleteCart = async (val: any) => {
        const payload = { cart_id: [val] }
        setState({
            ...state,
            loading: true
        })
        try {
            const data = await agent.Cart.deleteCart(payload)
            setState({
                ...state,
                loading: false,
                deleteMessage: data
            })
            fetchCartCatalog()
        } catch (error) {
            setState({
                ...state,
                loading: false,
                errorMessage: error
            })
        }
    }

    return (
        <CartProvider value={{ ...state, fetchCartCatalog: fetchCartCatalog, handleCheckout: handleCheckout, handleDeleteCart: handleDeleteCart }}>
            {children}
        </CartProvider>
    )
}