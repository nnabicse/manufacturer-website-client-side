import React from 'react';
import { useForm } from "react-hook-form";
import './AddReview.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Swal from 'sweetalert2';
import Loading from '../../Login/Loading/Loading';

const AddReview = () => {
    const [user, loading] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const reviewData = { ...data, name: user.displayName, email: user.email }
        fetch("https://fathomless-sands-04290.herokuapp.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({ reviewData })

        }).then(res => res.json())
            .then(
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Review Added Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            )
            .then(
                reset()
            )

    }

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='add-review-container'>
            <div className='section-header-container'>
                <h2>Add Review</h2>
            </div>
            <div className='review-form-container'>
                <p className='text-center fw-bold'>{user.displayName} ({user.email})</p>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='mb-3'>
                        <div className='input field-container'>
                            <label className="review-label-container">
                                <span className="label">Review: </span>
                            </label>
                            <input {...register("review", {
                                required: {
                                    value: true,
                                    message: "Email is Required"
                                }
                            })} type="text" placeholder="Your Review" className='w-100' />
                        </div>
                        <div className='error-container'>
                            <small className="error">
                                {errors.review?.type === 'required' && <span className='text-danger'>{errors.review.message}</span>}
                            </small>
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className='input field-container'>
                            <label className="rating-label-container">
                                <span className="label">Rating: </span>
                            </label>
                            <input {...register("rating", {
                                required: {
                                    value: true,
                                    message: "Rating is Required"
                                }
                            })} type="number" max={5} placeholder="1 to 5" className='w-100' />
                        </div>
                        <div className='error-container'>
                            <small className="error">
                                {errors.rating?.type === 'required' && <span className='text-danger'>{errors.rating.message}</span>}
                            </small>
                        </div>
                    </div>
                    <div className='review-submit-button-container text-center'>
                        <input className='btn btn-primary w-full' type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </div >
    );
};

export default AddReview;