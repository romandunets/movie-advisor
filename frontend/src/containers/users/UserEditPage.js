import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../actions/userActions'
import UserForm from '../../components/users/UserForm'
import { reset } from 'redux-form';

class UserEditPage extends Component {
  componentWillMount() {
    this.props.actions.getUser(this.props.params.id);
  }

  handleSubmit(user) {
    this.props.actions.updateUser(user);
  }

  render() {
    const { user } = this.props;
    const formValues = { initialValues: user }

    if (Object.keys(user).length > 0) {
      return (
        <UserForm onSubmit={ this.handleSubmit.bind(this) } {...formValues} />
      );
    }
    else {
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPage);
