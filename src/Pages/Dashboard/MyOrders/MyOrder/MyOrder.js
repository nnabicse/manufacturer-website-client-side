import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './MyOrder.css'

const MyOrder = ({ myOrder, index, refetch }) => {
    const navigate = useNavigate();
    const { _id, isPaid } = myOrder

    const handleCancelOrder = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://fathomless-sands-04290.herokuapp.com/order/${_id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")} `
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire(
                            'Deleted!',
                            'Your order has been cancelled.',
                            'success'
                        )
                        refetch(myOrder)

                    })

            }
        })

    }
    const handleMakePayment = () => {
        navigate(`/dashboard/makepayment/${_id}`)

    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{myOrder.buyer}</td>
            <td>{myOrder._id}</td>
            <td>{myOrder.name}</td>
            <td>{myOrder.orderQty}</td>
            <td>{myOrder.totalCost * myOrder.orderQty}</td>
            <td>{isPaid ? "Paid" : "Unpaid"}</td>
            <td>{myOrder?.transactionId}</td>
            <td>{!isPaid && <div className='my-orders-action-buttons-container'>
                <div>
                    <button className='btn btn-primary w-100' onClick={handleMakePayment}>Make Payment</button>
                </div>
                <div>
                    <button className='btn btn-danger w-100' onClick={handleCancelOrder}>Cancel Order</button>
                </div>
            </div>}</td>
        </tr>
    );
};

export default MyOrder;