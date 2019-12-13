import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //Our time, after which buttons will be disabled
      countdown: 10,
      //Scores
      germany: 0,
      brazil: 0,
      //Buttons disabled status
      germanyButton: false,
      brazilButton: false
    };

    this.germanyGoal = this.germanyGoal.bind(this);
    this.brazilGoal = this.brazilGoal.bind(this);
  }

  //Button handlers here
  germanyGoal() {
    this.setState(prevstate => ({ germany: prevstate.germany + 1 }));
  }

  brazilGoal() {
    this.setState(prevstate => ({ brazil: prevstate.brazil + 1 }));
  }

  componentDidMount() {
    //COUNTDOWN TIMER HERE
    this.myInterval = setInterval(() => {
      
      //decrease our countdown by one each second until we get 0
      if (this.state.countdown > 0) {
        this.setState(({ countdown }) => ({
          countdown: countdown - 1
        }));
      }

      //stop counting if we get 0
      if (this.state.countdown <= 0) {
        clearInterval(this.myInterval);

        //and make buttons unavailable
        this.setState({
          germanyButton: true,
          brazilButton: true
        });
      }
    }, 1000);

  }

  render() {
    return (
      <div className="App">

        <span>{this.state.countdown}</span>
        <br />

        <button disabled={this.state.germanyButton} onClick={this.germanyGoal}>
          Germany
        </button>
        <span>
          {this.state.germany} : {this.state.brazil}
        </span>
        <button disabled={this.state.brazilButton} onClick={this.brazilGoal}>
          Brazil
        </button>
        
      </div>
    );
  }
}
