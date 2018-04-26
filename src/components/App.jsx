import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import HomieDisplay from './HomieDisplay';
import HomieStats from './HomieStats';
import Buttons from './Buttons';
import { Grid, Row, Cell } from 'react-inline-grid';

export class App extends React.Component {

  slowlyKillLilHomie: null

  constructor(props) {
    super(props);
    this.state = {
      theLilHomie: {
        name: "Lil' Homie",
        alive: true,
        sleep: 100,
        hunger: 100,
        fun: 100,
        className: "alive"
      }
    };
    this.increaseHomieStats = this.increaseHomieStats.bind(this);
    this.decrementHomieStats = this.decrementHomieStats.bind(this);
  };

  increaseHomieStats(stat) {
    // console.log("This is the homie alive:" + this.state.theLilHomie.alive);
    let newHomie = Object.assign({}, this.state.theLilHomie);
    newHomie[stat] += 10;
    newHomie[stat] = (newHomie[stat] > 100) ? 100 : newHomie[stat];
    this.setState({theLilHomie: newHomie});
  }

  decrementHomieStats() {
    let newHomie = Object.assign({}, this.state.theLilHomie);
    newHomie.fun -= 5;
    newHomie.sleep -= 5;
    newHomie.hunger -= 5;
    if (newHomie.fun <= 0 || newHomie.sleep <= 0 || newHomie.hunger <= 0) {
      newHomie.alive = false;
      newHomie.className = "dead";
    }
      this.setState({theLilHomie: newHomie});
  }

  componentDidMount(){
    this.slowlyKillLilHomie = setInterval(this.decrementHomieStats, 300);
  }

  render() {
    return (
      <div>
        <Header/>
        <Grid>
          <Row is="start">
            <Cell is="4 offset-2" id="cellDisplay"><HomieDisplay homie={this.state.theLilHomie}/></Cell>
            <Cell is="2 "><HomieStats homie={this.state.theLilHomie}/></Cell>
          </Row>

        </Grid>
        <Buttons onIncreaseStats={this.increaseHomieStats}/>

        <style jsx>{`
            #cellDisplay{
              margin-left: 20vw;
              background-color: tomato;
            }
            `}
          </style>
        </div>
      );
    }
  }


  export default App;
