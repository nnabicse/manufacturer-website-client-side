import React from 'react';
import './Review.css';

const Review = (props) => {
    const { review } = props
    return (
        <div className='review-card-container'>
            <div className='review-image-container'>
                <img className='review-image' src={review.image} alt="" />
            </div>
            <div className='review-detail-container'>
                <h3 className='reviewer-name'>{review.name}</h3>
                <p className='review'>{review.review}</p>
                <p className='rating'>{review.rating} out of 5</p>
            </div>
        </div>
    );
};

export default Review;