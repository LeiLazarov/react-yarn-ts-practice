import React from "react";
import styled from "styled-components";
import imgLogo from "../../../assets/images/logo.png";
import imgServices from "../../../assets/images/services.svg";
import Col from "../grid/Col.styled";
import Row from "../grid/Row.styled";

const TopBarContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 18px 20px;
`;

const Logo = styled.img`
    width: 46px;
    margin: auto;
    vertical-align: middle;
    max-width: $screen-lg;
    top: 0;
    left: 14px;
    z-index: 1;
    height: 49px;
`;

const ServiceLogo = styled.img`
    width: 120px;
    margin-left: 25px;
    vertical-align: middle;
    max-width: $screen-lg;
    top: 0;
    left: 14px;
    z-index: 1;
    height: 49px;
`;

const MenuBar = styled.div`
    padding-top: 15px;
    float: right;
`;

const MenuItem = styled.div`
    display: inline-block;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin-right: 40px;
    cursor: pointer;
    &:hover {
        background-color: #eaedf4;
        text-decoration: underline;
    }
`;

const TopBar: React.FC = () => {
    return (
        <>
            <TopBarContainer>
                <Row>
                    <Col span={3}>
                        <Logo src={imgLogo} alt={"NSW Government Logo"} />
                        <ServiceLogo src={imgServices} alt={"Service NSW"} />
                    </Col>
                    <Col span={9}>
                        <MenuBar>
                            <MenuItem>Need help?</MenuItem>
                        </MenuBar>
                    </Col>
                </Row>
            </TopBarContainer>
        </>
    );
};

export default TopBar;
