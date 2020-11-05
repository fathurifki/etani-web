import * as React from 'react';
import ProductView from './components/ProductView';
import { ProductController } from './controller';

const Product = () => {
    return (
        <ProductController>
            <ProductView />
        </ProductController>
    )
}

export default Product