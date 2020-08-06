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

      <Switch>
        
        <Route path="/movies/:id" render={props => {
          const { id } = props.match.params;
        }}>
        <Movie movies={movieList} />
        </Route>

        <Route exact path="/" render={(props) => {
        return <MovieList movies={movieList} />
      }} />

     </Switch>

    </div>
  );
};

export default App;

