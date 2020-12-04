import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import axios from 'axios';

import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>

      <SavedList list={[ /* This is stretch */]} />

      {/* //Add Switch here to pick a Route  */}

      <Switch>

        {/* Add Route to specify a URL path */}
        {/* Make ID dynamic to enable opening a particular movie card. No props needed in the parent element. */}

        <Route path="/movies/:id" > 
        {/* render={props => { */}
          {/* // const { id } = props.match.params;
        // }}> */}
          <Movie />
        </Route>

        <Route exact path="/" render={() => 
          <MovieList movies={movieList} />
      } />

     </Switch>

    </div>
  );
};

export default App;

