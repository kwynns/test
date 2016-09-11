import R from 'ramda';
import * as types from '../constants/ActionTypes';
import { assign } from 'lodash';
const initialState = {
  movies: []
};

export default function (state = initialState, action) {
  switch (action.type) {

    case types.SET_MOVIES: {
      return {
        ...state,
        movies: action.movies
      };
    }

    case types.REMOVE_MOVIE_BY_SHOW_ID:{
      console.log('show id to remove', action.id);
      let newState = R.clone(state);
      let movies = newState.movies;

      for(var i = 0; i < movies.length; i++) {
          if(movies[i].show_id == action.id) {
              movies.splice(i, 1);
              break;
          }
      }
      newState.movies = movies
      // remove the movie with the show_id equal to action.id from newState
      // if succesfull, the movie will be removed when you click the trash icon next to it
      return newState;
    }
    default:
      return state;
  }
}
