import React from 'react';
import About from '../About/About';
import Uppor from '../Banner/Banner';
import Faculty from '../Faculty/Faculty';

import Services from '../Services/Services';

const Home = () => {
    return (

        <div>
            <Uppor></Uppor>
            <Services></Services>
            <Faculty></Faculty>
            <About></About>
        </div>

    );
};

export default Home;