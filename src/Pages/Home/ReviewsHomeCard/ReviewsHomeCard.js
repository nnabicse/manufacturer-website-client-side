import React from 'react';
import './ReviewsHomeCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Rating from 'react-rating';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ReviewsHomeCard = (props) => {
    const [user] = useAuthState(auth)
    const { review } = props
    return (
        <div className='review-card-container'>
            <div className='review-image-container'>
                <img className='review-image' src={review.image} alt="" />
            </div>
            <div className='review-detail-container'>
                <h5 className='reviewer-name'>{review.name}</h5>
                <p className='review'>{review.review}</p>
                <span className="font-medium">
                    Rating:
                    <Rating
                        className="ml-2"
                        initialRating={review.rating}
                        emptySymbol={
                            <FontAwesomeIcon
                                style={{ color: "rgb(147 197 253)" }}
                                icon={faStar}
                            />
                        }
                        fullSymbol={
                            <FontAwesomeIcon
                                style={{ color: "rgb(37 99 235)" }}
                                icon={faStar}
                            />
                        }
                        readonly
                    ></Rating>{" "}
                    ({review.rating}/5)
                </span>
            </div>
        </div>
    );
};

export default ReviewsHomeCard;