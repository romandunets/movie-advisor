import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';
import MessageBox from '../../components/shared/MessageBox';
import UserForm from '../../components/users/UserForm';

class UserNewPage extends Component {
  handleSubmit(user) {
    this.props.actions.createUser(user);
  }

  render() {
    const { message } = this.props;
    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title text-center">Create new user</h3>
          <MessageBox message={ message } />
          <UserForm onSubmit={ this.handleSubmit.bind(this) } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    message: state.users.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserNewPage);
