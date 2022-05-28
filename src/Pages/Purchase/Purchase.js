import React, { useEffect, useRef, useState } from 'react';
import './Purchase.css'
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Swal from 'sweetalert2';
import { Card } from 'react-bootstrap';
import auth from '../../firebase.init';
import Loading from '../Login/Loading/Loading';


const Purchase = () => {
    const phoneRef = useRef();
    const adressRef = useRef();
    const navigate = useNavigate()
    const { id } = useParams()
    const [user, loading] = useAuthState(auth);
    const [amount, setAmount] = useState(0);
    const [purchase, setPurchase] = useState([]);
    const [orderQuantity, setOrderQuantity] = useState(0)
    useEffect(() => {
        if (user) {
            fetch(`https://fathomless-sands-04290.herokuapp.com/product/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setPurchase(data[0])
                    setAmount(data[0].minOrderQty * data[0].price)
                    setOrderQuantity(data[0].minOrderQty)
                })

        }
    }, [user, id, purchase])


    if (loading) {
        return <Loading></Loading>
    }


    const handlePriceCalculation = (event) => {
        const quantity = event.target.value;
        const totalAmount = quantity * purchase.price;
        setAmount(totalAmount);
        setOrderQuantity(quantity);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProductQuantity = purchase.availableQty - orderQuantity;
        const phone = phoneRef.current.value;
        const adress = adressRef.current.value;
        const isPaid = false;
        const shipment = false;

        const order = {
            name: purchase.name, productId: purchase._id, buyer: user.email,
            buyerName: user.displayName, totalCost: amount, orderQty: orderQuantity, isPaid, phone, adress, shipment
        }

        fetch("https://fathomless-sands-04290.herokuapp.com/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify(order)

        }).then(res => res.json())


        fetch("https://fathomless-sands-04290.herokuapp.com/product", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ id, newProductQuantity })

        }).then(res => res.json())
            .then(
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Order Placced Success',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
            .then(navigate('/dashboard/myorders'))


    }

    return (
        <div className='purchase-container'>
            <div className='section-header-container'>
                <h1 className='section-header'>Place Purchase Order</h1>
            </div>
            <div className='purchase-detail-all-item-container'>
                <form onSubmit={handleSubmit}>
                    <Card className='border-0'>
                        <div className='purchase-image-container'>
                            <Card.Img variant="top" className='w-50' src={purchase.image} />
                        </div>
                        <Card.Body>
                            <Card.Title className='title'>{purchase.name}</Card.Title>
                            <Card.Text>
                                <p>{purchase.description}</p>
                                <div className='purchase-details-container'>
                                    <div className='info'>
                                        <p>Item Available Quantity: {purchase.availableQty}</p>
                                        <p>Per Unit Selling Price: ${purchase.price}</p>
                                        <p>Minimum Order Quantity: {purchase.minOrderQty}</p>
                                        <p>Order Quantity: <input type="number" onKeyUp={handlePriceCalculation} max={purchase.availableQty} min={purchase.minOrderQty} defaultValue={purchase.minOrderQty} required placeholder="Enter Quantity" /></p>
                                        <p>Total Cost: ${amount}</p>
                                    </div>
                                    <div className='info'>
                                        <form>
                                            <div className='field-container'>
                                                <div>
                                                    <span className='label'>Buyer Name: </span>
                                                </div>

                                                <input className='name-field w-100' defaultValue={user?.displayName} disabled type="text" />

                                            </div>
                                            <div className='field-container'>
                                                <div>
                                                    <span className='label'>Buyer Email: </span>
                                                </div>

                                                <input className='email-field w-100' defaultValue={user?.email} disabled type="emaol" />

                                            </div>
                                            <div className='field-container'>
                                                <div>
                                                    <span className='label'>Phone: </span>
                                                </div>

                                                <input className='phone-field w-100' required type="number" ref={phoneRef} />

                                            </div>
                                            <div className='field-container'>
                                                <div>
                                                    <span className='label'>Adress: </span>
                                                </div>

                                                <input className='adress-field w-100' required type="text" ref={adressRef} />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className='border-0 bg-white'>
                            <button className='btn btn-primary w-100' type='submit'>Purchase</button>
                        </Card.Footer>
                    </Card>
                </form>
            </div>


        </div>
    );
};

export default Purchase;