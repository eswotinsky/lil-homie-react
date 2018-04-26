import React from 'react';
import PropTypes from 'prop-types';

function HomieStats(props){
  return(
    <div className="statsContainer">
      <h1>Sleep</h1>
      <progress max="100" value={props.homie.sleep} id="sleepMeter"></progress>
      <br/>
      <h1>Hunger</h1>
      <progress max="100" value={props.homie.hunger} id="hungerMeter"></progress>
      <br/>
      <h1>Fun</h1>
      <progress max="100" value={props.homie.fun} id="funMeter"></progress>

      <style jsx>{`

    h1 {
      font-family: chalkduster;
      margin-left: 5%;
    }

    div.statsContainer{
      height: 30vh;
      width: 30vw;
      border: 5px solid black;
      background-color: tomato;
      box-shadow: 0px 0px 25px firebrick;

    }
    progress {
      background-size: 100%;
      position: relative;
      left:15%;
      width: 70%;
    }

    progress::-webkit-progress-bar{
      background: bisque;
      height: 20px;
      box-shadow: 0 6px 5px rgba(0, 0, 0, 0.25) inset;
    }

    progress::-webkit-progress-value {
      height: 20px;
      box-shadow: 0 5px 5px rgba(0, 0, 0, 0.25) inset;
      background: cornflowerblue;
    }
  `}
      </style>
    </div>
  );
}

HomieStats.propTypes = {
  homie: PropTypes.object
};

export default HomieStats;
