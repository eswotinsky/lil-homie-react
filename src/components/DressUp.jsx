import React from 'react';
import PropTypes from 'prop-types';
import hatMagic from '../assets/images/hat-magic.png';
import hatPolice from '../assets/images/hat-police.png';
import hatRasta from '../assets/images/hat-rasta.png';
import hatSanta from '../assets/images/hat-santa.png';
import hatWizard from '../assets/images/hat-wizard.png';

function DressUp(props) {
  return (
    <div className="dressUp">
      <style jsx>{`
        div.dressUp {
          background-color:tomato;
          border: 5px solid black;
          color:white;
          text-align: center;
          margin-right: 19.4%;
          height: 12vh;
          margin-left: 16.4%;
          margin-top: 5%;
          font-family: chalkduster;
          font-size: 2.25vw;
          padding: 2%;
        }
        h3 {
          margin-top:0px;
          margin-bottom:0px;
        }
        img {
          width:50px;
          padding:5px;
          margin:20px;
          background-color:bisque;
        }
      `}
      </style>
      <h3>CHOOSE A HAT</h3>
      <img onClick={()=>props.onHatClick('hatMagic')} src={hatMagic}/>
      <img onClick={()=>props.onHatClick('hatPolice')} src={hatPolice}/>
      <img onClick={()=>props.onHatClick('hatRasta')} src={hatRasta}/>
      <img onClick={()=>props.onHatClick('hatSanta')} src={hatSanta}/>
      <img onClick={()=>props.onHatClick('hatWizard')} src={hatWizard}/>
    </div>
  );
}

DressUp.propTypes = {
  onHatClick: PropTypes.func
};

export default DressUp;
