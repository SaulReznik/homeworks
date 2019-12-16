import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const Button = props => {
    return (
        <button className="buttons" value={props.value} onClick={(e) => props.buttonHandler(e, "value")}>{props.value}</button>
    )
}

export default Button;

Button.propTypes = {
    buttonHandler: PropTypes.func.isRequired
};

Button.defaultProps = {
    buttonHandler: () => console.log('Sorry, the button is not initialized yet')
}