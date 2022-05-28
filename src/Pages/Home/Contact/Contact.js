import React from 'react';
import './Contact.css'
import { Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div>
            <div className='section-header-container'>
                <h1 className='section-header'>Contact</h1>
            </div>
            <div className='contact-details-container'>
                <div className='contact-us-container'>
                    <div className='header-container'>
                        <h3 className='header'>Contact Us</h3>
                    </div>
                    <div className='detail-container'>
                        <p>NNABI Printing Parts Manufacturer Ltd.</p>
                        <p>Email: nnabi@ppml.com</p>
                        <p>Phone: +8801777777777</p>
                        <p>7th Floor, 580C, 228 </p>
                        <p>South City Block</p>
                        <p>Washington, USA</p>
                    </div>
                </div>
                <div className='contact-form-container'>
                    <div className='header-container'>
                        <h3 className='header'>Let Us Contact You</h3>
                    </div>
                    <div className='detail-container'>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Email</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className='let-us-submit-button-container'>
                                <button className='btn btn-primary let-us-submit-button'>Submit</button>
                            </div>
                        </Form>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Contact;