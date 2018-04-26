import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import HomieDisplay from './HomieDisplay';
import HomieStats from './HomieStats';
import Buttons from './Buttons';
import { Grid, Row, Cell } from 'react-inline-grid';

function App(){
  return (
    <div>
      <Header/>
      <Grid>
        <Row is="start">
          <Cell is="4 offset-2" id="cellDisplay"><HomieDisplay/></Cell>
          <Cell is="2 "><HomieStats/></Cell>
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


  export default App;
