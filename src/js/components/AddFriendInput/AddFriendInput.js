import './AddFriendInput.scss';
var api = require('../../middleware/api.js');

import React, { Component, PropTypes } from 'react';
import {setMovies} from '../../actions/FriendsActions';
import { connect } from 'react-redux';

class AddFriendInput extends Component {

  static propTypes = {
    setMovies: PropTypes.func.isRequired,
    name: PropTypes.string,
    dispatch: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.props.name || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    api.getMoviesFor(name);
    if (e.which === 13) {
      this.props.dispatch(setMovies(response));
      this.setState({ name: '' });
    }
  }

  render() {
    return (
      <input
        type="text"
        autoFocus="true"
        className="form-control addFriendInput"
        placeholder="Type the name of an actor"
        value={this.state.name}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    );
  }
}

export default connect()(AddFriendInput);
