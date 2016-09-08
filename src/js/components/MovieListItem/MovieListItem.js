import './FriendListItem.scss';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {removeMovieByShowId} from '../../actions/FriendsActions';
class MovieListItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired,
    dispatch: PropTypes.func
  };

  render () {
    let {show_id, release_year, show_title} = this.props.movie;
    return (
      <li className="friendListItem">
          <p>{show_title}</p>
        <div className="friendActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.dispatch(removeMovieByShowId(show_id))}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

export default connect()(MovieListItem);
