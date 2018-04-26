import React from 'react';
import PropTypes from 'prop-types';

function Buttons(props) {

  return(
    <div className="buttonContainer">
      <button className="btn" onClick={()=>props.onIncreaseStats('hunger')} id="foodButton">Feed</button>
      <button className="btn" onClick={()=>props.onIncreaseStats('sleep')} id="sleepButton">Sleep</button>
      <button className="btn" onClick={()=>props.onIncreaseStats('fun')} id="playButton">Play</button>
      <style jsx>{`
        div.buttonContainer {
          margin-left: 16.4%;
          margin-right: 19.4%;
          padding-top: 1.5%;
          padding-bottom: 3%;
        }
        .btn {
          border: 2px solid black;
          box-shadow: 0px 0px 25px firebrick;
          font-size: 2.75vw;
          font-family: chalkduster;
          color: white;
          background-color: tomato;
          height: 75px;
          width: 24%;
          margin-right: 5%;
          margin-left: 4.3%;
        }

      `}</style>
    </div>
  );
}

Buttons.propTypes = {
  onIncreaseStats: PropTypes.func
};

export default Buttons;
