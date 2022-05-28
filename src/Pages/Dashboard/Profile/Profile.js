import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query'
import auth from '../../../firebase.init';
import Loading from '../../Login/Loading/Loading';
import Swal from 'sweetalert2';
import "./Profile.css";

const Profile = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const educationRef = useRef()
    const adressRef = useRef()
    const imageRef = useRef()
    const phoneRef = useRef()
    const companyRef = useRef()
    const [user, loading] = useAuthState(auth)

    const { isLoading, error, data, refetch } = useQuery("currentUser", () => fetch(`http://localhost:5000/user/?email=${user?.email}`, {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
        .then(res => res.json())

    )

    if (isLoading || loading) {
        return <Loading></Loading>
    }

    let userProfile;

    if (data) {
        userProfile = data[0]
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const education = educationRef.current.value;
        const adress = adressRef.current.value;
        const phone = phoneRef.current.value;
        const company = companyRef.current.value;
        const image = imageRef.current.value;

        const currentUser = { name: name, email: email, education: education, adress: adress, phone: phone, company: company, image: image }
        event.target.reset()

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Update'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/user/?email=${user.email}`, {
                        method: "PATCH",
                        headers: {
                            "content-type": "application/json",
                            authorization: `Bearer ${localStorage.getItem("accessToken")}`
                        },
                        body: JSON.stringify(currentUser)
                    })
                        .then(res => res.json())
                        .then(refetch())
                        .then(
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your information has been updated',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        )

                }
            })
    }



    return (
        <div className='profile-container'>
            <div className='profile-header-container'>
                <h2 className='profile-header'>Profile</h2>
            </div>
            <div className='profile-details-container'>
                <div className='user-details-all-container'>
                    <div className='info-header-container'>
                        <h3 className='info-header'>User Information</h3>
                    </div>
                    <div className='user-details-container'>
                        <div className='user-image-container'>
                            <img className='user-image' src={userProfile?.image ? userProfile?.image : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="" />
                        </div>
                        <div className='user-detail-container'>
                            <h5 className='user-name'>{user?.displayName}</h5>
                            <p className="user-text">{userProfile?.email}</p>
                            <p className="user-text">{userProfile?.phone}</p>
                            <p className="user-text">{userProfile?.company}</p>
                            <p className="user-text">{userProfile?.adress}</p>
                            <p className="user-text">{userProfile?.education}</p>
                        </div>
                    </div>
                </div>
                <div className='update-info-container'>
                    <div className='info-header-container'>
                        <h3 className='info-header'>Update Information</h3>
                    </div>
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>
                            <div className='field-container'>
                                <div>
                                    <span className='label'>Name: </span>
                                </div>

                                <input className='name-field w-100' required type="text" ref={nameRef} />

                            </div>
                            <div className='field-container'>
                                <div>
                                    <span className='label'>Email: </span>
                                </div>

                                <input className='email-field w-100' required type="email" ref={emailRef} />

                            </div>
                            <div className='field-container'>
                                <div>
                                    <span className='label'>Phone: </span>
                                </div>

                                <input className='phone-field w-100' required type="number" ref={phoneRef} />

                            </div>
                            <div className='field-container'>
                                <div>
                                    <span className='label'>Company: </span>
                                </div>

                                <input className='company-field w-100' required type="text" ref={companyRef} />

                            </div>
                            <div className='field-container'>
                                <div>
                                    <span className='label'>Education: </span>
                                </div>

                                <input className='education-field w-100' required type="text" ref={educationRef} />

                            </div>
                            <div className='field-container'>
                                <div>
                                    <span className='label'>Adress: </span>
                                </div>

                                <input className='adress-field w-100' required type="text" ref={adressRef} />

                            </div>
                            <div className='field-container'>
                                <div>
                                    <span className='label'>Image: </span>
                                </div>

                                <input className='image-field w-100' required type="text" ref={imageRef} />

                            </div>
                            <div className='update-prifile-button-container'>
                                <button className='btn btn-primary'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Profile;