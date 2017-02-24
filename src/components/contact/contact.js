import React from 'react';

export const Contact = ( ) => {
    return(
        <div className="contact">
            <div className="contact-container">
                <a href="mailto:scottadevito@gmail.com">
                    <div className="contact-btn"><h5>Email</h5></div>
                </a>
                
                <img className="email-logo" src="https://s3.amazonaws.com/sdevito-web-portfolio/mailIcon1.png" role="presentation" />

                <a href="https://www.linkedin.com/pub/scott-devito/91/239/34" target="_blank">
                    <div className="contact-btn"><h5>LinkedIn</h5></div>
                </a>
            </div>
        </div>
    );
};