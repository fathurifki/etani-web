import * as React from 'react';
import DetailProductView from './components/DetailView';
import { DetailController } from './controller';


const DetailProduct = () => {
    return (
        <DetailController>
            <DetailProductView />
        </DetailController>
    )
}

export default DetailProduct