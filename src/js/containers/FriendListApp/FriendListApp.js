import './FriendListApp.scss';

import React, { Component, PropTypes } from 'react';

import { AddFriendInput, FriendList } from '../../components';

class FriendListApp extends Component {

  static propTypes = {
    friendList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {

    return (
      <div className="friendListApp">
        <h1>Da Bros List</h1>
        <AddFriendInput />
        <FriendList />
      </div>
    );
  }
}

export default FriendListApp;
