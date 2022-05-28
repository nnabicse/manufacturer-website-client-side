import React from 'react';
import './Partners.css';

const Partners = () => {
    return (
        <div>
            <div className='section-header-container'>
                <h1 className='section-header'>Business Parteners</h1>
            </div>
            <div className='partner-container'>
                <div className='partner-details-container'>
                    <div className='partner-image-container'>
                        <img className='partner-image' src='https://i.ibb.co/yBK5Ss5/expr-5.png' alt="" />
                    </div>
                    <div className='partner-detail-container'>
                        <h5 className='partner-name'>Coca Cola</h5>
                        <p className='partner'>Big Client of Printer Trey</p>
                        <p className='partner'>Since 1992</p>
                    </div>
                </div>
                <div className='partner-details-container'>
                    <div className='partner-image-container'>
                        <img className='partner-image' src='https://i.ibb.co/YQwNqNw/expr-3.png' alt="" />
                    </div>
                    <div className='partner-detail-container'>
                        <h5 className='partner-name'>Amazon Inc.</h5>
                        <p className="partner-text">Big Client of Toner</p>
                        <p className="partner-text">Since 1992</p>
                    </div>
                </div>
                <div className='partner-details-container'>
                    <div className='partner-image-container'>
                        <img className='partner-image' src='https://i.ibb.co/rmq5Xtd/expr-6.png' alt="" />
                    </div>
                    <div className='partner-detail-container'>
                        <h5 className='partner-name'>Samsung Corp.</h5>
                        <p className="partner-text">Big Client of Printer Cart</p>
                        <p className="partner-text">Since 1992</p>
                    </div>
                </div>
                <div className='partner-details-container'>
                    <div className='partner-image-container'>
                        <img className='partner-image' src='https://i.ibb.co/sHsYWJr/expr-7.png' alt="" />
                    </div>
                    <div className='partner-detail-container'>
                        <h5 className='partner-name'>Walt Disney</h5>
                        <p className="partner-text">Big Client of Feeder</p>
                        <p className="partner-text">Since 1992</p>
                    </div>
                </div>
                <div className='partner-details-container'>
                    <div className='partner-image-container'>
                        <img className='partner-image' src='https://i.ibb.co/GJdnjgd/expr-8.png' alt="" />
                    </div>
                    <div className='partner-detail-container'>
                        <h5 className='partner-name'>Toyota</h5>
                        <p className="partner-text">Big Client of Chasis</p>
                        <p className="partner-text">Since 1992</p>
                    </div>
                </div>
                <div className='partner-details-container'>
                    <div className='partner-image-container'>
                        <img className='partner-image' src='https://i.ibb.co/K0Pxvrq/expr-9.png' alt="" />
                    </div>
                    <div className='partner-detail-container'>
                        <h5 className='partner-name'>AT&T Co.</h5>
                        <p className="partner-text">Big Client of Roller</p>
                        <p className="partner-text">Since 1992</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Partners;