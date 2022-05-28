import React from 'react';
import Loading from '../../Login/Loading/Loading';
import { useQuery } from 'react-query'
import './Tools.css'
import Tool from '../Tool/Tool';

const Tools = () => {
    const { isLoading, error, data } = useQuery('tools', () =>
        fetch('https://limitless-plateau-33448.herokuapp.com/product').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='tools-container'>
            <div className='section-header-container'>
                <h1 className='section-header'>Our Products</h1>
            </div>
            <div className='tools-card-container'>

                <div className='tools-home-container card-deck'>
                    {
                        data?.map(data => <Tool
                            key={data._id}
                            tool={data}
                        ></Tool>)
                    }
                </div>
            </div>

        </div>

    );
};

export default Tools;