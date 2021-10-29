import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutUs = () => {
    const history = useHistory();

    return (
        <div>
            <head>
                <title>About us</title>
            </head>

            <main >
                <h1>
                    About us
                </h1>
                <button onClick={() => history.push('/')}>Go back to Home</button>
            </main>
        </div>
    );
};

export default AboutUs;
