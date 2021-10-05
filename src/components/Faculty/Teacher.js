import React from 'react';
import { Card } from 'react-bootstrap';
import './instractor.css'

const Teacher = (props) => {
    const { name, post, img } = props.faculty;
    return (
        <div className="facullty">
            <Card style={{ width: '18rem' }} className="mx-auto mt-2">
                <div>
                    <Card.Img className="teacher" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{post}</Card.Text>
                    </Card.Body>
                </div>
            </Card>
        </div>
    );
};

export default Teacher;