import React from 'react';

function Buttons() {

  return(
    <div className="buttonContainer">
      <button className="btn" id="foodButton">Feed</button>
      <button className="btn" id="sleepButton">Sleep</button>
      <button className="btn" id="playButton">Play</button>
      <style jsx>{`
        div.buttonContainer {
          margin-left: 16.4%;
          margin-right: 19.4%;
          padding-top: 3%;
          padding-bottom: 3%;
        }
        .btn {
          border: 2px solid black;
          box-shadow: 0px 0px 25px firebrick;
          font-size: 25px;
          font-family: chalkduster;
          color: white;
          background-color: tomato;
          height: 75px;
          width: 200px;
          margin-right: 4.3%;
          margin-left: 4.3%;
        }

      `}</style>
    </div>
  );
}

export default Buttons;
