import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as userActions from '../../actions/userActions';
import UserForm from '../../components/users/UserForm';

class UserEditPage extends Component {
  componentWillMount() {
    this.props.actions.getUser(this.props.params.id);
  }

  handleSubmit(user) {
    this.props.actions.updateUser(user);
  }

  render() {
    const { user, isLoading } = this.props;
    const initialValues = { ...user };

    return (
      <div className="center-container">
        <div className="center-content">
          <h3 className="title text-center">Edit user</h3>
          { !isLoading &&
            <UserForm onSubmit={ this.handleSubmit.bind(this) } initialValues={ initialValues } />
          }
        </div>
      </div>
    );
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
