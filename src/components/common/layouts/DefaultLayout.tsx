import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const LayoutContainer = styled.div``;

const DefaultLayout = (props: any) => {
    const { children, topBar, footer } = props;

    return (
        <LayoutContainer>
            {topBar}
            <main>{children}</main>
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
    topBar: null,
    navigation: null,
    footer: null
};

export default DefaultLayout;
