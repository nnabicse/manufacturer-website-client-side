import React, { useEffect, useState } from 'react';
import './ManageProducts.css';
import { Table } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/product`, {
            method: "GET",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [products])

    return (
        <div className='manage-products-container'>
            <div className='section-header-container'>
                <h2>Manage Products</h2>
            </div>
            <div className='table-container text-center'>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product ID</th>
                            <th>Name</th>
                            <th>Added By</th>
                            <th>Available Qty</th>
                            <th>Minimum Order Qty</th>
                            <th>Unit Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map((product, index) => <ManageProduct
                                key={product._id}
                                index={index}
                                product={product}
                            ></ManageProduct>)
                        }
                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default ManageProducts;