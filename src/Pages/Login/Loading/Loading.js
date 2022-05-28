import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
    return (
        <div className="text-center">
            <Spinner animation="grow" />
        </div>
    );
};

export default Loading;