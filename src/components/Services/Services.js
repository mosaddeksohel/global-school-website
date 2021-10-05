import React, { useEffect, useState } from 'react';
import Serve from './serve';
import './Serve.css'

const Services = () => {
    const [services, setService] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, ([]))

    return (
        <div>
            <div>
                <h2>Let's browse all servises</h2>
            </div>
            <div className="my-auto item">
                {
                    services.map(serve => <Serve
                        key={serve.id}
                        serve={serve}
                    ></Serve>)
                }

            </div>
        </div >
    );
};




export default Services;