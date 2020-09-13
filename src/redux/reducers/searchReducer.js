import MovieActionTypes from '../actiontypes/types';

const initialState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MovieActionTypes.SEARCH_MOVIE:
      return {
        ...state,
        text: action.payload,
        loading: false
      };
    case MovieActionTypes.FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload,
        loading: false
      };
    case MovieActionTypes.FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload,
        loading: false
      };
    case MovieActionTypes.LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}