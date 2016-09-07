import * as types from '../constants/ActionTypes';

export function setMovies(movies) {
  return {
    type: types.SET_MOVIES,
    movies
  };
}

export function deleteFriend(id) {
  return {
    type: types.DELETE_FRIEND,
    id
  };
}

export function starFriend(id) {
  return {
    type: types.STAR_FRIEND,
    id
  };
}
