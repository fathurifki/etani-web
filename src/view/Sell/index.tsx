import * as React from 'react';
import SellView from './components/SellView';
import { SellController } from './controller';

const Sell = () => {
    return (
        <SellController>
            <SellView />
        </SellController>
    )
}

export default Sell