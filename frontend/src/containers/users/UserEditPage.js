import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as userActions from '../../actions/userActions'
import UserForm from '../../components/users/UserForm'

class UserEditPage extends Component {
  componentWillMount() {
    this.props.actions.getUser(this.props.params.id);
  }

  handleSubmit(user) {
    this.props.actions.updateUser(user);
  }

  render() {
    const { user, isLoading } = this.props;
    const formValues = { initialValues: user }

    if (!isLoading) {
      return (
        <UserForm onSubmit={ this.handleSubmit.bind(this) } {...formValues} />
      );
    }

    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.user,
    isLoading: state.users.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPage);
