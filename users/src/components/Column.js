import React from "react";
import PropTypes from "prop-types";

import SubHeader from "./SubHeader";
import List from "./List";

export default function Column(props) {
    return (
        <div>
            <SubHeader title={props.title} />
            <List list={props.data} />
        </div>
    );
}

Column.propTypes = {
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.object)
}