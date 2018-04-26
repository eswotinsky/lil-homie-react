import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import HomieDisplay from './HomieDisplay';
import HomieStats from './HomieStats';
import Buttons from './Buttons';
import DressUp from './DressUp';
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
        className: "alive",
      }
    };
    this.increaseHomieStats = this.increaseHomieStats.bind(this);
    this.decrementHomieStats = this.decrementHomieStats.bind(this);
    this.handleHatClick = this.handleHatClick.bind(this);
  };

  increaseHomieStats(stat) {
    let newHomie = Object.assign({}, this.state.theLilHomie);
    if (this.state.theLilHomie.alive) {
      newHomie[stat] += 6;
      newHomie[stat] = (newHomie[stat] > 100) ? 100 : newHomie[stat];
    }
    // console.log("This is the homie alive:" + this.state.theLilHomie.alive);
    this.setState({theLilHomie: newHomie});
  }

  decrementHomieStats() {
    let newHomie = Object.assign({}, this.state.theLilHomie);
    newHomie.fun -= .34;
    newHomie.sleep -= .34;
    newHomie.hunger -= .34;
    if (newHomie.fun <= 0 || newHomie.sleep <= 0 || newHomie.hunger <= 0) {
      newHomie.alive = false;
      newHomie.className = "dead";
      newHomie.fun = 0;
      newHomie.sleep = 0;
      newHomie.hunger = 0;
    }
      this.setState({theLilHomie: newHomie});
  }

  handleHatClick(hat) {
    let newHomie = Object.assign({}, this.state.theLilHomie);
    if (newHomie.alive == true){
      newHomie.className = hat;
    }
    this.setState({theLilHomie: newHomie});
  }

  componentDidMount(){
    this.slowlyKillLilHomie = setInterval(this.decrementHomieStats, 50);
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
        <DressUp onHatClick={this.handleHatClick}/>
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
