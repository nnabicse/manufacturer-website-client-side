import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
import Loading from '../../Login/Loading/Loading';

const CheckoutForm = ({ order }) => {
    const { totalCost } = order;
    console.log(totalCost)
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');

    useEffect(() => {
        fetch('https://fathomless-sands-04290.herokuapp.com/create-payment-intent', {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ totalCost })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })


    }, [totalCost])
    console.log(clientSecret);
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
        } else {
            setCardError("");
            console.log('[PaymentMethod]', paymentMethod);
        }


        setSuccess("");
        setProcessing(true)
        const { paymentIntent, error: intendError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: order.buyerName,
                        email: order.buyer
                    },
                },
            },
        );



        if (intendError) {
            setCardError(intendError.message)
            setProcessing(false)
        }
        else {
            setCardError("")
            setTransactionId(paymentIntent.id)
            setSuccess("Congrats! Your payment is completed")



            fetch(`https://fathomless-sands-04290.herokuapp.com/allorder/${order._id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                },
                body: JSON.stringify({ transactionId: paymentIntent.id })
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                })

        }

    }

    if (processing) {
        return <Loading></Loading>
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-success btn-sm mt-3' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-danger'>{cardError}</p>
            }
            {
                success && <div>
                    <p className='text-success'>{success} </p>
                    <p>Your Transaction Id: <span className='text-success fw-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;