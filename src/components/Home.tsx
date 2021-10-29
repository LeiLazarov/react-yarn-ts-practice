import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Home () {
    const history = useHistory();

    return (
        <div>
            <head>
                <title>Create Next App</title>
            </head>

            <main >
                <h1>
                    Welcome to <a href='https://nextjs.org'>Next.js!</a>
                </h1>
                <Button onClick={() => history.push('/about')}>Go to About us</Button>
            </main>
        </div>
    );
}

const Button = styled.button`

`;
