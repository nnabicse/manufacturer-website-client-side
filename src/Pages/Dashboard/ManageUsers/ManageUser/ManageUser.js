import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import Loading from '../../../Login/Loading/Loading';
import Swal from 'sweetalert2';
import './ManageUser.css'

const ManageUser = ({ currentUser, index, refetch }) => {
    const [user, loading] = useAuthState(auth)

    const makeAdmin = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Make Admin!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://limitless-plateau-33448.herokuapp.com/alluser/admin/${currentUser.email}`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Made Admin Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }

                    )
            }



        })
    }

    if (loading) {
        <Loading></Loading>
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{currentUser._id}</td>
            <td>{currentUser.email}</td>
            <td>{currentUser.phone}</td>
            <td>{currentUser.adress}</td>
            <td>{currentUser.company}</td>
            <td><div className='action-button-container'>
                <div>{currentUser.role !== "admin" ? <button onClick={makeAdmin} className='btn btn-primary btn-sm'>Make Admin</button> : ""}</div>
            </div></td>
        </tr>
    );
};

export default ManageUser;