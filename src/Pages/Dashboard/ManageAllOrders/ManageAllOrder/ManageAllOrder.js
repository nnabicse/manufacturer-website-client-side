import React from 'react';
import './ManageAllOrder.css'
import Swal from 'sweetalert2';

const ManageAllOrder = ({ order, index, refetch }) => {


    const handleShipment = () => {
        fetch(`https://limitless-plateau-33448.herokuapp.com/allorder`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ id: order._id })
        })
            .then(res => res.json())
            .then(
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product Shhipped Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })

            )
            .then(refetch(order));
    }




    return (
        <tr>
            <td>{index + 1}</td>
            <td>{order._id}</td>
            <td>{order.buyer}</td>
            <td>{order.adress}</td>
            <td>{order.phone}</td>
            <td>{order.name}</td>
            <td>{order.productId}</td>
            <td>{order.orderQty}</td>
            <td>{order.totalCost}</td>
            <td>{!order.isPaid ? <span className='text-danger fw-bold'>Payment Due</span> : <span className='text-success fw-bold'>Paid</span>}</td>
            <td>{!order.shipment ? <span className='text-danger fw-bold'>Pending</span> : <span className='text-success fw-bold'>Shipped</span>}</td>
            <td>{!order.isPaid || order.shipment ? "" : <div className='action-button-container'>
                <div><button className='btn btn-success btn-sm' onClick={handleShipment}>Make Shipment</button></div>
            </div>}</td>
        </tr>
    );
};

export default ManageAllOrder;