import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height: 60px;
`;

const Title = styled.div``;

const Header = (props: any) => {
    return (
        <HeaderContainer>
            <Title>FC&apos;s blog</Title>
        </HeaderContainer>
    );
};

export default Header;
