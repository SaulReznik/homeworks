import React from "react";
import PropTypes from "prop-types";

export default function SubHeader(props) {
    return <h3>{props.title}</h3>;
}

SubHeader.propTypes = {
    title: PropTypes.string
};

SubHeader.defaultProps = {
    title: "some subheader"
};