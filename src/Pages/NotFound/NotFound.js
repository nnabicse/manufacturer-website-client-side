import React from 'react';
import './NotFound.css';
import notfound from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='img-fluid' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;