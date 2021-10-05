import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark">
            <div>
                <div className="footer">
                    <div className="services">
                        <h3>Web Design</h3>
                        <h3>Web Development</h3>
                        <h3>Graphics Design</h3>
                        <h3>Algorithm</h3>
                    </div>
                    <div className="services">
                        <h3>Data Structure</h3>
                        <h3>Data Science</h3>
                        <h3>Python</h3>
                        <h3>Networking</h3>
                    </div>
                </div>
            </div>

            <div className="bg-success right">
                <h5 className="right">All Right Reserved &copy; Global Institute</h5>
            </div>

        </div>
    );
};

export default Footer;