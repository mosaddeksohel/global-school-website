import React, { useEffect, useState } from 'react';
import Teacher from './Teacher';
import './Teacher.css'

const Faculty = () => {

    const [faculty, setFaculty] = useState([]);
    useEffect(() => {
        fetch('faculty.json')
            .then(res => res.json())
            .then(data => setFaculty(data))
    }, [])
    return (
        <div>
            <h2>Our Instractors</h2>
            <div className="instractor">
                {
                    faculty.map(faculty => <Teacher
                        key={faculty.id}
                        faculty={faculty}
                    ></Teacher>)
                }
            </div>
        </div>
    );
};

export default Faculty;