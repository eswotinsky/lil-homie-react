import React from 'react';

function Header(){
  return (
    <div>
      <style jsx>{`
          div {
            background-color:tomato;
            color:white;
            text-align: center;
            margin-right: 19.4%;
            height: 12vh;
            border: 5px dotted black;
            margin-left: 16.4%;
            margin-top: 5%;
            font-family: chalkduster;
            font-size: 2.25vw;
            padding: 2%;

          }
        `}
      </style>
      <h1>Homie Simulator</h1>
    </div>
  );
}

export default Header;
