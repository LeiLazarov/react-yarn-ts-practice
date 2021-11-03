import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    background-color: #f4f7f9;
`;

const Footer = (props: any) => {
    return (
        <FooterContainer>
            <div>footer</div>
        </FooterContainer>
    );
};

export default Footer;
