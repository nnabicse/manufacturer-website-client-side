import React, { useEffect, useState } from 'react';
import auth from '../../../../firebase.init';
import Loading from '../../../Login/Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query'
import './MyOrders.css';
import MyOrder from '../MyOrder/MyOrder';
import { Table } from 'react-bootstrap';

const MyOrders = () => {
    const [user, loading] = useAuthState(auth)

    const { isLoading, error, data: myOrders, refetch } = useQuery("myOrders", () =>
        fetch(`http://localhost:5000/order?buyer=${user.email}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        },
        )
            .then(res => res.json())


    )

    if (loading || isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='my-orders-container'>
            <div className='section-header-container'>
                <h1>My Orders</h1>
            </div>
            <div className='my-orders-form-container text-center'>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Ordered By</th>
                            <th>Order ID</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                            <th>Payment Status</th>
                            <th>Transaction Id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((myOrder, index) => <MyOrder
                                key={myOrder._id}
                                index={index}
                                myOrder={myOrder}
                                refetch={refetch}
                            ></MyOrder>)
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyOrders;