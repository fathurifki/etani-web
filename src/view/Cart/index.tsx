import * as React from 'react';
import CartView from './components/CartView';
import { CartController } from './controller';


const Cart = () => {
    return (
        <CartController>
            <CartView />
        </CartController>
    )
}

export default Cart