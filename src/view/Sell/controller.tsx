import * as React from 'react';
import agent from '../../utils/agent';
import history from '../../utils/browserHistory';
interface InitialState {
    handleInput: Function
    handleImageUpload: Function
    submitData: Function
    handleImageMobileUpload: Function
    loading: any
    name: string
    category: string
    price: any
    stock: any
    weight: string
    description: string
    file: string
    imagePreviewUrl: any
}

const initialState = {
    handleInput: () => { },
    handleImageUpload: () => { },
    submitData: () => { },
    loading: false,
    name: "",
    category: "".toLowerCase(),
    price: null,
    stock: null,
    weight: "",
    description: "",
    file: "",
    imagePreviewUrl: null,
    handleImageMobileUpload: () => { }
}

export const SellContext = React.createContext<InitialState>(initialState)
export const { Provider: SellProvider } = SellContext

export const SellController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)
    console.log('STATE', state)
    const handleInput = (val: any) => {
        const name = val.target.name
        const value = val.target.value

        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleImageUpload = (event: any) => {
        event.preventDefault()
        const files = event.target.files[0] || event.dataTransfer.files[0]
        setState((prevState) => ({
            ...prevState,
            file: files,
            imagePreviewUrl: URL.createObjectURL(event.target.files[0]),
        }))
    }

    const handleImageMobileUpload = (val: any) => {
        setState((prevState) => ({
            ...prevState,
            file: val,
        }))
    }

    const submitData = async () => {
        const { name, category, price, stock, weight, description, file } = state
        const formData = new FormData()
        formData.append('name', name);
        formData.append('price', price);
        formData.append('stock', stock);
        formData.append('category', category.toLowerCase());
        formData.append('weight', weight);
        formData.append('description', description);
        formData.append('product_image', file);
        setState((prevState) => ({
            ...prevState,
            loading: true
        }))
        try {
            const data = await agent.Sell.post(formData)
            if (data.status === 200) {
                setState((prevState) => ({
                    ...prevState,
                    loading: false
                }))
            }
            history.push('/home')
            console.log('DATA', data)
        } catch (error) {
            if (error) {
                setState((prevState) => ({
                    ...prevState,
                    loading: false
                }))
            }
        }
    }

    return (
        <SellProvider
            value={{
                ...state,
                handleImageMobileUpload: handleImageMobileUpload,
                handleInput: handleInput,
                handleImageUpload: handleImageUpload,
                submitData: submitData
            }}
        >
            {children}
        </SellProvider>
    )
}