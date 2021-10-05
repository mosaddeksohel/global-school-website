
import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/group-studying.png'
import './banner.css'

const Uppor = () => {
    return (

        <div className="d-flex my-3 bg-info mt-0">
            <Container>
                <div className="d-flex my-3">
                    <div className="my-auto align-item-center">
                        <h5>Popular online courses</h5>
                        <h1 className="moto">The new way to learn with us</h1>
                    </div>
                    <div>

                        <img className="banner" src={img} alt="" />

                    </div>
                </div>
            </Container>
        </div>


    );
};

export default Uppor;