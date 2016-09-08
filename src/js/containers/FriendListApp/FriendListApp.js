import './FriendListApp.scss';

import React, { Component, PropTypes } from 'react';

import { SetActorInput, MovieList } from '../../components';

class FriendListApp extends Component {

  static propTypes = {
    friendList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {

    return (
      <div className="friendListApp">
        <h1>Movies by actor</h1>
        <SetActorInput />
        <MovieList />
      </div>
    );
  }
}

export default FriendListApp;
