import React from 'react';

import Match from './components/Match';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      games: [
        {
          home: {
            team: "Bruges",
            score: 0
          },
          guests: {
            team: "Real Madrid",
            score: 0
          }
        },
        {
          home: {
            team: "Atletico Madrid",
            score: 0
          },
          guests: {
            team: "Lokomotiv",
            score: 0
          }
        },
        {
          home: {
            team: "Bayer Leverkusen",
            score: 0
          },
          guests: {
            team: "Juventus",
            score: 0
          }
        },
        {
          home: {
            team: "PSG",
            score: 0
          },
          guests: {
            team: "Galatasaray",
            score: 0
          }
        },
        {
          home: {
            team: "Olympiacos",
            score: 0
          },
          guests: {
            team: "Crvena Zvezda",
            score: 0
          }
        },
        {
          home: {
            team: "Bayern Munich",
            score: 0
          },
          guests: {
            team: "Tottenham Hotspur",
            score: 0
          }
        },
      ]
    };

    this.goal = this.goal.bind(this);
  };

  //Our GOAL button event listener
  goal(parent) {
    let rand = Math.round(Math.random());                             //rand is a randomly 1 or 0

    const { games } = this.state;                                     //distructing state
    const index = games.findIndex(element => element === parent);     //finding the exact game, in which was triggered the goal
    const newGames = [...this.state.games];                           //createin new array of games in which we will change the state

    //randomly setting the goal
    if (rand) {
      newGames[index].home.score = newGames[index].home.score + 1;
    } else {
      newGames[index].guests.score = newGames[index].guests.score + 1;
    }
    
    //And setting the new array to our state
    this.setState({ games: newGames });
  }

  render() {
    return (
      <div className="App">
        {this.state.games.map((item, index) => {
          return (
            <Match
              key={index}

              home={item.home.team}
              homeScore={item.home.score}

              guests={item.guests.team}
              guestsScore={item.guests.score}

              goal={() => this.goal(item)}
            />
          );
        })}
      </div>
    );
  }

}

