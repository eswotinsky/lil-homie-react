import React from 'react';
import lilHomie from '../assets/images/lil-homie.jpg';
import PropTypes from 'prop-types';


function HomieDisplay(props){
  return (
    <div>
      <img className={props.homie.className} src={lilHomie}/>
      <style jsx>{`
          img{

            border: 5px solid black;
            height: 30vh;
            width: 30vw;
          }

          img.dead {
            filter: drop-shadow(10px 10px 10px orange) blur(10px);
          }
          `}
        </style>
      </div>
    );
  }


HomieDisplay.propTypes = {
  homie: PropTypes.object
}

export default HomieDisplay;
