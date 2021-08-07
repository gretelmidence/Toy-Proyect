import React from 'react';
import { Link } from 'react-router-dom';

const Results = (props) => {

  return (
    <div className="results-container">
      <ul>
      {
        props.gameResults.map(game => (
          <li key={game.gameID}>

            <Link to={{
              pathname: `/game/${game.external}`,
              gameProps:{
                game: game
              }
            }}>
            <h3>{game.external}</h3>
            <img src={game.thumb} alt="game"/>
            </Link>
            
          </li>
        ))
      }
      </ul>
    </div>
  );
}

export default Results;