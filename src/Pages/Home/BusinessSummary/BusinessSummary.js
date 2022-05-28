import React from 'react';
import './BusinessSummary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faBuildingCircleCheck, faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

const BusinessSummary = () => {
    return (
        <div>
            <div className='section-header-container'>
                <h1 className='section-header'>Business Summary</h1>
            </div>
            <div className='business-summary-container'>
                <div className='summary-text-container'>
                    <h1 className='summary-big-text'>
                        TRUST ALL OVER THE GLOBE WITH SME'S
                    </h1>
                    <h5 className='summary-small-text'>
                        MOST SME FRIENDLY WHOLSELLER
                    </h5>
                </div>
                <div className='summary-details-container'>
                    <div className='summary-details'>
                        <p className='icon'> <FontAwesomeIcon icon={faGlobe} /></p>
                        <h1 className='middle-text'>75+</h1>
                        <h6 className='last-text'>Countries</h6>
                    </div>
                    <div className='summary-details'>
                        <p className='icon'> <FontAwesomeIcon icon={faBuildingCircleCheck} /></p>
                        <h1 className='middle-text'>850+</h1>
                        <h6 className='last-text'>Corporates</h6>
                    </div>
                    <div className='summary-details'>
                        <p className='icon'> <FontAwesomeIcon icon={faPeopleGroup} /></p>
                        <h1 className='middle-text'>2M+</h1>
                        <h6 className='last-text'>Customers</h6>
                    </div>
                    <div className='summary-details'>
                        <p className='icon'> <FontAwesomeIcon icon={faThumbsUp} /></p>
                        <h1 className='middle-text'>5000+</h1>
                        <h6 className='last-text'>Feedbacks</h6>
                    </div>

                </div>
                <div className='summary-query-container'>
                    <div className='summary-query-text'>
                        <h5 className='query-long-text'>Have any query about us or product request?</h5>
                        <h5>Don't hesitate to contact us</h5>
                    </div>
                    <div className='summary-query-buttons-container'>
                        <div className='query-button-qoute'>
                            <button className='query-button-qoute btn btn-primary w-100'>Quotation</button>
                        </div>
                        <div className='query-button-contact'>
                            <button className='query-button-contact btn btn-success w-100'>Contact Us</button>
                        </div>
                    </div>

                </div>

            </div>


        </div >
    );
};

export default BusinessSummary;