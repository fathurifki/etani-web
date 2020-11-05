import * as React from 'react';
import agent from '../../utils/agent';

interface InitialState {
    handleInput: Function
    handleImageUpload: Function
    submitData: Function
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
    name: "",
    category: "".toLowerCase(),
    price: null,
    stock: null,
    weight: "",
    description: "",
    file: "",
    imagePreviewUrl: null
}

export const SellContext = React.createContext<InitialState>(initialState)
export const { Provider: SellProvider } = SellContext

export const SellController = ({ children }: any) => {
    const [state, setState] = React.useState<InitialState>(initialState)

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
        const reader = new FileReader()
        const files = event.target.files[0] || event.dataTransfer.files[0]
        setState((prevState) => ({
            ...prevState,
            file: files,
            imagePreviewUrl: URL.createObjectURL(event.target.files[0]),
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

        try {
            const data = await agent.Sell.post(formData)
            console.log('DATA', data)
        } catch (error) {
            console.log('ERROR', error)
        }
    }

    return (
        <SellProvider value={{ ...state, handleInput: handleInput, handleImageUpload: handleImageUpload, submitData: submitData }}>
            {children}
        </SellProvider>
    )
}