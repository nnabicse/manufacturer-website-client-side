import React from 'react';
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom';
import Loading from '../../Login/Loading/Loading';
import ToolsHomeCard from '../ToolsHomeCard/ToolsHomeCard';
import './ToolsHome.css';

const ToolsHome = () => {
    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery('tools', () =>
        fetch('https://limitless-plateau-33448.herokuapp.com/product').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleSeeAllProducts = () => {
        navigate("/tools")
    }
    const handlePurchaseButton = (id) => {
        navigate(`/purchase/${id}`)

    }
    return (
        <div>
            <div className='section-header-container'>
                <h1 className='section-header'>Our Products</h1>
            </div>
            <div className='tools-home-container card-deck'>
                {
                    data?.slice(0, 6).map(data => <ToolsHomeCard
                        key={data._id}
                        tool={data}
                        id={data._id}
                        handlePurchaseButton={handlePurchaseButton}
                    ></ToolsHomeCard>)
                }
            </div>
            <div className='text-center'>
                <button className='btn btn-primary' onClick={handleSeeAllProducts}>See All Products</button>
            </div>
        </div>
    );
};

export default ToolsHome;