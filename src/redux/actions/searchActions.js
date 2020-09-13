import MovieActionTypes from '../actiontypes/types';
import axios from 'axios';

import { ApiKey } from '../../api/ApiKey';

export const searchMovie = text => dispatch => {
  dispatch({
    type: MovieActionTypes.SEARCH_MOVIE,
    payload: text
  });
};

export const fetchMovies = text => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${ApiKey}&s=${text}`)
    .then(response =>
      dispatch({
        type: MovieActionTypes.FETCH_MOVIES,
        payload: response.data.Search
      })
    )
    .catch(err => console.log(err));
};

export const fetchMovieDetail = id => dispatch => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${ApiKey}&i=${id}`)
    .then(response =>
      dispatch({
        type: MovieActionTypes.FETCH_MOVIE,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const setLoading = () => {
  return {
    type: MovieActionTypes.LOADING
  };
};