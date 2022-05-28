import React from 'react';
import Loading from '../../Login/Loading/Loading';
import { useQuery } from 'react-query'
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const { isLoading, error, data } = useQuery('reviews', () =>
        fetch('https://fathomless-sands-04290.herokuapp.com/review').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='section-header-container'>
                <h1 className='section-header'>Reviews</h1>
            </div>
            <div className='all-reviews-container'>
                {
                    data?.map(data => <Review
                        key={data._id}
                        review={data}
                    ></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;