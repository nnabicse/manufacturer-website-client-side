import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Dashboard.css';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className='dashboard-content-container'>
            <div className='section-header-container'>
                <h1 className='section-header'>Dashboard</h1>
            </div>
            <div className='dashboard-buttons-container'>
                {!admin && <Link to="/dashboard/myorders"> <button className='btn btn-primary w-100'>Orders</button></Link>}
                {admin && <Link to="/dashboard/manageorders"> <button className='btn btn-primary w-100'>Manage Orders</button></Link>}
                <Link to="/dashboard/profile"> <button className='btn btn-primary w-100'>Profile</button></Link>
                {!admin && <Link to="/dashboard/addreview"> <button className='btn btn-primary w-100'>Add Review</button></Link>}
                {admin && <Link to="/dashboard/manageusers"> <button className='btn btn-primary w-100'>Manage Users</button></Link>}
            </div>
            <div className='admin-level-buttons'>
                {admin && <Link to="/dashboard/addproduct"> <button className='btn btn-primary w-100'>Add Product</button></Link>}
                {admin && <Link to="/dashboard/manageproducts"> <button className='btn btn-primary w-100'>Manage Products</button></Link>}
            </div>
            <div className='outlet-container'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;