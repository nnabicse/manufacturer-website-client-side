import React from 'react';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Message.css';
import useAdmin from '../../../hooks/useAdmin';

const Message = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)

    return (
        <div className='messaage-container'>
            <div className='welcome-message-container'>
                <h2 className='welcome-message'>Welcome to Dashboard {user?.displayName}</h2>
            </div>
            <div className='message-details-container text-justify'>
                {admin ? "" : <p className='message-details' > To see your orders click <span className='message-button'>Orders </span>Button</p>}
                <p className='message-details'>To update your info Click <span className='message-button'>Profile </span>Button</p>
                {admin ? "" : <p className='message-details'>To add review click <span className='message-button'>Add Review </span>Button</p>}
                {admin ? <p className='message-details'>To add product click <span className='message-button'>Add Product </span>Button</p> : ""}
                {admin ? <p className='message-details'>To manage orders click <span className='message-button'>Manage Orders </span>Button</p> : ""}
                {admin ? <p className='message-details'>To manage users click <span className='message-button'>Manage Users </span>Button</p> : ""}
                {admin ? <p className='message-details'>To manage products click <span className='message-button'>Manage Products </span>Button</p> : ""}
            </div>
        </div >
    );
};

export default Message;