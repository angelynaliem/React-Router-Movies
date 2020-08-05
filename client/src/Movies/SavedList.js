import React from 'react';
import { useHistory } from 'react-router-dom';

function SavedList(props) {

  const history = useHistory();

  return (

  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    <button className="home-button" onClick={() => history.push("/")}>Home</button>
      

  </div>
 
);
    }

export default SavedList;

