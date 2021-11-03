import React from "react";
import PropTypes from "prop-types";
import { CardContainer } from "./Card.styled";

const Card = ({ title, height, vertical, loading, children, ...rest }: any) => {
    return (
        <CardContainer height={height} vertical={vertical} {...rest}>
            {title && <h6>{title}</h6>}
            {children}
        </CardContainer>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    height: PropTypes.string,
    vertical: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.array])
};

Card.defaultProps = {
    vertical: false,
    height: "14rem",
};

export default Card;
