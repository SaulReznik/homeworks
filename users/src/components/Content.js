import React from "react";
import PropTypes from 'prop-types';

import Column from "./Column";

import '../App.css';

export default function Content(props) {
    return (
        // Setting our data by 3 columns which discribe eye color
        <div className="flexy-stuff">
            <Column data={props.blue} title={"blue"} />
            <Column data={props.green} title={"green"} />
            <Column data={props.brown} title={"brown"} />
        </div>
    );
}

Content.propTypes = {
    title: PropTypes.string,
    blue: PropTypes.arrayOf(PropTypes.object),
    green: PropTypes.arrayOf(PropTypes.object),
    brown: PropTypes.arrayOf(PropTypes.object),
}

Content.defaultProps = {
    title: "deafult title"
}