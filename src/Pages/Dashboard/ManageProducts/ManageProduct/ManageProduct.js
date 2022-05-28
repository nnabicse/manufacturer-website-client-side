import React from 'react';
import './ManageProduct.css'
import Swal from 'sweetalert2';

const ManageProduct = ({ product, index }) => {

    const deleteProduct = () => {
        Swal.fire({
            title: 'Are you sure to Delete?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/product/${product._id}`, {
                    method: "DELETE",
                    headers: {
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                    .then(res => res.json())
                    .then(Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Item Deleted Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    }))

            }
        })
    }

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.addedBy}</td>
            <td>{product.availableQty}</td>
            <td>{product.minOrderQty}</td>
            <td>{product.price}</td>
            <td>
                <button className='btn btn-danger btn-sm' onClick={deleteProduct}>Delete Item</button></td>
        </tr>
    );
};

export default ManageProduct;