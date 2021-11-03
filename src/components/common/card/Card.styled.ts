import styled, { css } from "styled-components/macro";

export const CardContainer = styled.div<{ height: string; vertical: any }>`
    color: #242934;
    height: ${(props) => props.height};
    background-color: white;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.07);
    border-radius: 4px;
    padding: 16px 24px;
    margin-bottom: 1.5rem;
    position: relative;

    ${(props) =>
        props.vertical &&
        css`
            display: flex;
            justify-content: space-between;

            @media (max-width: 576px) {
                display: block;
            }
        `};

    @media (max-width: 576px) {
        height: 13rem;
    }
`;
