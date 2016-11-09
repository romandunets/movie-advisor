import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../actions/userActions'
import UserForm from '../../components/users/UserForm'

class UserNewPage extends Component {
  handleSubmit(user) {
    this.props.actions.createUser(user);
  }

  render() {
    return (
      <UserForm onSubmit={ this.handleSubmit.bind(this) } />
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(UserNewPage);
