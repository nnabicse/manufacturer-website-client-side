import React from 'react';
import { useQuery } from 'react-query'
import { Table } from 'react-bootstrap';
import ManageUser from '../ManageUser/ManageUser';
import Loading from '../../../Login/Loading/Loading';
import './ManageUsers.css'

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery("users", () => fetch(`http://localhost:5000/alluser`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    })
        .then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='manage-users-container'>
            <div className='section-header-container'>
                <h2>Manage Users</h2>
            </div>
            <div className='text-center manage-users-table-container'>
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>UserID</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Adress</th>
                            <th>Company</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, index) => <ManageUser
                                key={user._id}
                                index={index}
                                currentUser={user}
                                refetch={refetch}
                            ></ManageUser>)
                        }
                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default ManageUsers;