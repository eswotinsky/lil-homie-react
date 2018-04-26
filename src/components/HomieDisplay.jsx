import React from 'react';
import lilHomie from '../assets/images/lil-homie.jpg'


function HomieDisplay(){
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

  export default HomieDisplay;
