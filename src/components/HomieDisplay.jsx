import React from 'react';
import lilHomie from '../assets/images/lil-homie.jpg';
import PropTypes from 'prop-types';


function HomieDisplay(props){
  return (
    <div>
      <img src={lilHomie}/>
      <style jsx>{`
          img{

            border: 5px solid black;
            height: 30vh;
            width: 30vw;
            background-color: tomato;

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
