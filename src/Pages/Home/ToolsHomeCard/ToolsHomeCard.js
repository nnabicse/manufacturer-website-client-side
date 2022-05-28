import React from 'react';
import { Card } from 'react-bootstrap';
import './ToolsHomeCard.css'

const ToolsHomeCard = (props) => {
    const { tool, handlePurchaseButton, id } = props
    return (
        <Card className='tools-home-card-container'>
            <Card.Img variant="top" src={tool.image} />
            <Card.Body>
                <Card.Title className='title'>{tool.name}</Card.Title>
                <Card.Text>
                    <p>{tool.description}</p>
                    <p>Available Quantity: {tool.availableQty}</p>
                    <p>Unit Price: {tool.price}</p>
                    <p>Minimum Order Quantity: {tool.minOrderQty}</p>
                </Card.Text>
            </Card.Body>
            <Card.Footer className='border-0 bg-white'>
                <button className='btn btn-primary w-100' onClick={() => handlePurchaseButton(id)}>Purchase</button>
            </Card.Footer>
        </Card>
    );
};

export default ToolsHomeCard;