import React from 'react';
import Banner from '../Banner/Banner';
import './Home.css'
import ToolsHome from '../ToolsHome/ToolsHome';
import ReviewsHome from '../ReviewsHome/ReviewsHome';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Partners from '../Partners/Partners';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='home-items-container'>
                <ToolsHome></ToolsHome>
                <ReviewsHome></ReviewsHome>
                <BusinessSummary></BusinessSummary>
                <Partners></Partners>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;