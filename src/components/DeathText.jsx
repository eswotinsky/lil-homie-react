import React from 'react';
import PropTypes from 'prop-types';

function DeathText(props) {

  return(
    <div>
      <h1>{props.homie.deathMessage}</h1>
      <style jsx>{`
          h1{
            font-family: chalkduster;
            text-align: center;
            font-size: 3vw;
            margin-left: 16.4%;
            margin-right: 19.4%;
          }



      `}</style>
    </div>
  );
}

DeathText.propTypes = {
  homie: PropTypes.object
};

export default DeathText;
