import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import './MakePayment.css';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3HHmLQfr5Z9itmppF0LxoQw8KrhI2zZehOmltezwXW0PLfBPJTt33siroedD28Ww9gORGB6OGnN7TvAEu74zHU00SsmgTejt');

const MakePayment = () => {
    const [order, setOrder] = useState([])
    const { id } = useParams();
    useEffect(() => {
        fetch(`https://limitless-plateau-33448.herokuapp.com/order/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")} `
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div className='make-payment-container'>
            <div className='section-header-container'>
                <h1>Payment</h1>
            </div>
            <div>
                <div className='payment-details-container'>
                    <div>
                        <div className='text-center mb-3'>
                            <h5 className='title'>Order Details</h5>
                        </div>
                        <div className='detail-container'>
                            <div><p>Item Name: <span className='title'>{order.name}</span></p></div>
                            <div><p>Ordered Qty: <span className='title'>{order.orderQty}</span></p></div>
                            <div><p>Total Cost: <span className='title'>${order.totalCost}</span></p></div>
                            <div><p>Buyer: <span className='title'>{order.buyer}</span></p></div>
                        </div>
                    </div>
                    <div>
                        <div className='text-center mb-3'>
                            <h5 className='title'>Make Payment</h5>
                        </div>
                        <div className='detail-container'>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm
                                    order={order}
                                />
                            </Elements>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MakePayment;