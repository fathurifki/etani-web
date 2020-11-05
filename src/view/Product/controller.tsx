import * as React from 'react';
import agent from '../../utils/agent';
import history from '../../utils/browserHistory'

interface InitialState {
    loading: Boolean
    detailProduct: any
    getDetail: Function
}

const initialState = {
    loading: false,
    detailProduct: {},
    getDetail: () => { }
}

export const ProductContext = React.createContext<InitialState>(initialState)
export const { Provider: ProductProvider } = ProductContext

export const ProductController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)

    const getDetail = async (val: any) => {
        setState({
            ...state,
            loading: true
        })
        try {
            const data = await agent.Product.getDetailProduct(String(val))
            setState({
                ...state,
                loading: false,
                detailProduct: data
            })
            history.push({
                pathname: '/detail-product',
                state: { detail: data }
            })
        } catch (error) {
            setState({
                ...state,
                loading: false,
                detailProduct: {}
            })
        }
    }

    return (
        <ProductProvider value={{ ...state, getDetail: getDetail }} >
            {children}
        </ProductProvider>
    )
}