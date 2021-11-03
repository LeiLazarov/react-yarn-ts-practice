import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TopBar from "../headers/TopBar";
import Footer from "../footer/Footer";

const LayoutContainer = styled.div``;

const BodyContainer = styled.div`
    min-height: 1000px;
`;

const DefaultLayout = (props: any) => {
    const { children, topBar, navigation, footer } = props;

    return (
        <LayoutContainer>
            {topBar}
            {navigation}
            <BodyContainer>{children}</BodyContainer>
            {footer}
        </LayoutContainer>
    );
};

DefaultLayout.propTypes = {
    topBar: PropTypes.element,
    navigation: PropTypes.element,
    footer: PropTypes.element
};

DefaultLayout.defaultProps = {
    topBar: <TopBar />,
    navigation: null,
    footer: <Footer />
};

export default DefaultLayout;
