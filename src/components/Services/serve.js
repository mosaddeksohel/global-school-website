import React from 'react';
// import './Serve.css'
import { Card, Button } from 'react-bootstrap';

const Serve = (props) => {
    const { title, img, mission } = props.serve;
    return (

        <div>
            <div>
                <Card style={{ width: '18rem' }} className="mx-auto mt-2">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{mission}</Card.Text>
                        <Button variant="warning">Enroll Now</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Serve;