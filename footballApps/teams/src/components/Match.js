import React from 'react';
import PropTypes from 'prop-types';

import '../App.css'

const Match = props => {
    return(
    <div className="match-container">
        <span className="name-container">{props.home} </span>
        <span className="score-container">{props.homeScore}</span>

        <button onClick={props.goal}>GOAL</button>

        <span className="score-container">{props.guestsScore} </span>
        <span className="name-container">{props.guests} </span>
    </div>
    );
}

export default Match;

Match.propTypes = {
    home: PropTypes.string.isRequired,
    guests: PropTypes.string.isRequired,
    homeScore: PropTypes.number.isRequired,
    guestsScore: PropTypes.number.isRequired,
    goal: PropTypes.func.isRequired
};