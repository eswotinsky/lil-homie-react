import React from 'react';
import lilHomie from '../assets/images/lil-homie.jpg';
import Tombstone from '../assets/images/tombstone.jpg';
import PropTypes from 'prop-types';
import lilHomieMagic from '../assets/images/lil-homie-magic.png';
import lilHomiePolice from '../assets/images/lil-homie-police.png';
import lilHomieRasta from '../assets/images/lil-homie-rasta.png';
import lilHomieSanta from '../assets/images/lil-homie-santa.png';
import lilHomieWizard from '../assets/images/lil-homie-wizard.png';

function HomieDisplay(props){
  return (
    <div className={props.homie.className}>
      <style jsx>{`
          div {
            box-shadow: 0px 0px 25px firebrick;
          }

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
          div.hatMagic {
            background-image: url(${lilHomieMagic});
            background-size: 100% 100%;
            border: 5px solid black;
            height: 30vh;
            width: 30vw;
          }
          div.hatPolice {
            background-image: url(${lilHomiePolice});
            background-size: 100% 100%;
            border: 5px solid black;
            height: 30vh;
            width: 30vw;
          }
          div.hatRasta {
            background-image: url(${lilHomieRasta});
            background-size: 100% 100%;
            border: 5px solid black;
            height: 30vh;
            width: 30vw;
          }
          div.hatSanta {
            background-image: url(${lilHomieSanta});
            background-size: 100% 100%;
            border: 5px solid black;
            height: 30vh;
            width: 30vw;
          }
          div.hatWizard {
            background-image: url(${lilHomieWizard});
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
