import * as React from 'react';
import { useLocation } from 'react-router';

const PaymentStatusView = () => {
    const location: any = useLocation()
    const paymentStatus = location.state.payment.data
    console.log(paymentStatus)

    const renderComponent = paymentStatus.map((val: any) => {
        return (
            <div className="flex flex-row justify-between rounded bg-white p-4">
                <div className="flex flex-col space-y-2">
                    <p>ID : {val._id}</p>
                    <p>Status : {val.status}</p>
                    <p>Jumlah : {val.amount}</p>
                    <p>Tanggal : {val.createdAt}</p>
                </div>
            </div>
        )
    })

    return (
        <div className="flex flex-col">
            <div className="h-full relative space-y-4 p-4">
                {renderComponent}
            </div>
        </div >
    );
}

export default PaymentStatusView