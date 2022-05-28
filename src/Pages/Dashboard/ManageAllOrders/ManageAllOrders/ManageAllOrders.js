import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../../../Login/Loading/Loading';
import './ManageAllOrders.css'
import { Table } from 'react-bootstrap';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';

const ManageAllOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery("orders", () => fetch(`https://fathomless-sands-04290.herokuapp.com/allorder`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='manage-all-orders-container'>
            <div className='section-header-container'>
                <h2>Manage Orders</h2>
            </div>
            <div className='table-container text-center'>
                <Table striped hover responsive >
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Order ID</th>
                            <th>Buyer</th>
                            <th>Adress</th>
                            <th>Phone</th>
                            <th>Item Name</th>
                            <th>Product ID</th>
                            <th>Order Qty</th>
                            <th>Total Cost</th>
                            <th>Payment Status</th>
                            <th>Shipment Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders?.map((order, index) => <ManageAllOrder
                                key={order._id}
                                index={index}
                                order={order}
                                refetch={refetch}
                            ></ManageAllOrder>)
                        }
                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default ManageAllOrders;