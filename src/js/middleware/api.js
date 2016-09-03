export function fetchFriend(name) {
  var baseUrl = 'http://netflixroulette.net/api/api.php?actor='
  var fullUrl = baseUrl + name;

  return dispatch => {
  dispatch(addFriend(name))
  return fetch(fullUrl)
    .then(response => response.json())
    .then(json => dispatch(receiveFriend(name, json)))
  };
}
