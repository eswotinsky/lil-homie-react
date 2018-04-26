import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import HomieDisplay from './HomieDisplay';
import HomieStats from './HomieStats';
import Buttons from './Buttons';
import { Grid, Row, Cell } from 'react-inline-grid';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theLilHomie: {
        name: "Lil' Homie",
        alive: true,
        sleep: 50,
        hunger: 75,
        fun: 90
      }
    }
  };

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
        <Buttons/>

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
