import React, { useEffect, useState } from 'react';
import Serve from './serve';

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
            <div className="my-auto card">
                {
                    services.map(serve => <Serve
                        serve={serve}
                    ></Serve>)
                }

            </div>
        </div>
    );
};




export default Services;