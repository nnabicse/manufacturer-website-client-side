import React from 'react';
import './ReviewsHome.css'
import { useQuery } from 'react-query'
import Loading from '../../Login/Loading/Loading';
import ReviewsHomeCard from '../ReviewsHomeCard/ReviewsHomeCard';
import { useNavigate } from 'react-router-dom';

const ReviewsHome = () => {
    const navigate = useNavigate();
    const { isLoading, error, data } = useQuery('reviews', () =>
        fetch('https://fathomless-sands-04290.herokuapp.com/review', {
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        }).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleSeeAllReviews = () => {
        navigate("/reviews")
    }
    return (
        <div>
            <div className='section-header-container'>
                <h1 className='section-header'>Reviews</h1>
            </div>
            <div className='reviews-home-container'>
                {
                    data?.map(data => <ReviewsHomeCard
                        key={data._id}
                        review={data}
                    ></ReviewsHomeCard>)
                }

            </div>
            <div className='text-center all-review-button-container'>
                <button className='btn btn-primary' onClick={handleSeeAllReviews}>See All Reviews</button>
            </div>
        </div>
    );
};

export default ReviewsHome;