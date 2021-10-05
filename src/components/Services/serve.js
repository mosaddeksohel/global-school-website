import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Serve = (props) => {
    const { title, img, mission, fee } = props.serve;

    return (

        <div>
            <div>
                <Card style={{ width: '18rem' }} className="mx-auto mt-2">
                    <div>
                        <Card.Img src={img} />
                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>{mission}</Card.Text>
                            <Card.Title>Course Fee: {fee}</Card.Title>
                            <Button variant="warning">Enroll Now</Button>
                        </Card.Body>

                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Serve;