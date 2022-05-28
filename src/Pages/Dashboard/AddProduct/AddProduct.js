import React, { useRef } from 'react';
import './AddProduct.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Swal from 'sweetalert2';


const AddProduct = () => {
    const itemNameRef = useRef()
    const descriptionRef = useRef()
    const minOrderQtyRef = useRef()
    const availableQtyRef = useRef()
    const unitPriceRef = useRef()
    const itemImageRef = useRef()
    const [user] = useAuthState(auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = itemNameRef.current.value;
        const description = descriptionRef.current.value;
        const minOrderQty = minOrderQtyRef.current.value;
        const availableQty = availableQtyRef.current.value;
        const price = unitPriceRef.current.value;
        const image = itemImageRef.current.value;
        const product = {
            email: user?.email,
            name: name,
            description: description,
            minOrderQty: minOrderQty,
            availableQty: availableQty,
            price: price,
            image: image
        }

        fetch("https://fathomless-sands-04290.herokuapp.com/product", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ product })

        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged === "true") {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Product Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .then()

    }

    return (
        <div className='add-product-container'>
            <div className='section-header-container'>
                <h2>Add Product</h2>
                <p className='fw-bold'>{user.displayName} ({user.email})</p>
            </div>
            <div className='add-product-details-container'>
                <form onSubmit={handleSubmit}>
                    <div className='field-container'>
                        <div>
                            <span className='label'>Item Name: </span>
                        </div>

                        <input className='item-name-field w-100' required type="text" ref={itemNameRef} />

                    </div>
                    <div className='field-container'>
                        <div>
                            <span className='label'>Description: </span>
                        </div>

                        <input className='desc-field w-100' required type="text" ref={descriptionRef} />

                    </div>
                    <div className='field-container'>
                        <div>
                            <span className='label'>Minimum Order Qty: </span>
                        </div>

                        <input className='minOrderQty-field w-100' required type="number" ref={minOrderQtyRef} />

                    </div>
                    <div className='field-container'>
                        <div>
                            <span className='label'>Available Quantity: </span>
                        </div>

                        <input className='availableQty-field w-100' required type="number" ref={availableQtyRef} />

                    </div>
                    <div className='field-container'>
                        <div>
                            <span className='label'>Unit Price: </span>
                        </div>

                        <input className='unit-price-field w-100' required type="number" ref={unitPriceRef} />

                    </div>
                    <div className='field-container'>
                        <div>
                            <span className='label'>Image: </span>
                        </div>

                        <input className='image-field w-100' required type="text" ref={itemImageRef} />

                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default AddProduct;