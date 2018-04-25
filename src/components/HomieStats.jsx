import React from 'react';

function HomieStats(){
  return(
  <div className="statsContainer">
     <progress max="100" value="100" id="sleepMeter"></progress>
     <br/>
     <progress max="100" value="100" id="hungerMeter"></progress>
     <br/>
     <progress max="100" value="100" id="funMeter"></progress>

  <style jsx>{`
    div.statsContainer{

      height: 30vh;
      width: 30vw;
      border: 5px solid black;
      background-color: tomato;

    }



      `

    }




  </style>

</div>
  )





}


export default HomieStats;
