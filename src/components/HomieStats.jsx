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
    div.statsContainer{
      height: 30vh;
      width: 30vw;
      border: 5px solid black;
      background-color: tomato;
    }
    progress {
      position: relative;
      left:15%;
      width: 70%;
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
