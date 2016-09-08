import * as types from '../constants/ActionTypes';

export function setMovies(movies) {
  return {
    type: types.SET_MOVIES,
    movies
  };
}

export function removeMovieByShowId(id) {
  return {
    type: types.REMOVE_MOVIE_BY_SHOW_ID,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}
