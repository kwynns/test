import './FriendList.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieListItem from '../MovieListItem/MovieListItem';

class MovieList extends Component {

  static propTypes = {
    movies: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  renderList() {
    return this.props.movies.map((movie) =>
      (
        <MovieListItem movie={movie} />
      )
    );
  }

  render () {
    return (
      <ul className="friendList">
        {this.renderList()}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.movieList.movies
  };
}

export default connect(mapStateToProps)(MovieList);
