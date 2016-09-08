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
      // remove the movie with the show_id equal to action.id from newState
      // if succesfull, the movie will be removed when you click the trash icon next to it
      return newState;
    }
    default:
      return state;
  }
}
