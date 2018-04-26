import React from 'react';
import lilHomie from '../assets/images/lil-homie.jpg';
import Tombstone from '../assets/images/tombstone.jpg';
import PropTypes from 'prop-types';

function HomieDisplay(props){
  return (
    <div className={props.homie.className}>
      <style jsx>{`
          div.alive{
            background-image: url(${lilHomie});
            background-size: 100% 100%;
            border: 5px solid black;
            height: 30vh;
            width: 30vw;
          }

          div.dead {
            background-image: url(${Tombstone});
            background-size: 100% 100%;
            border: 5px solid black;
            height: 30vh;
            width: 30vw;
          }
          `}
      </style>
    </div>
  );
}

HomieDisplay.propTypes = {
  homie: PropTypes.object
};

export default HomieDisplay;
