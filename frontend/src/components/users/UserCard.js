import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class UserCard extends Component {
  componentDidMount() {
    var button = ReactDOM.findDOMNode(this.refs.deleteUserButton);
    if (button) {
      button.setAttribute('data-toggle', 'modal');
      button.setAttribute('data-target', '.delete-user-modal');
    }

    var modal = ReactDOM.findDOMNode(this.refs.deleteUserModal);
    if (modal) {
      modal.setAttribute('tabindex', '-1');
      modal.setAttribute('aria-labelledby', 'Delete user');
      modal.setAttribute('aria-hidden', 'true');
      modal.setAttribute('data-backdrop', 'false');
    }
  }

  render() {
    const { currentUser, user, deleteUser, isAuthenticated, isAdmin } = this.props;

    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h4>
              { user.firstName } { user.secondName }
              <span className="text-muted"> ({ user.username })</span>
            </h4>
          </div>
          <div className="col-md-6">
            <div className="float-xs-right actions">
              { isAuthenticated && (isAdmin || user.id == currentUser.id) &&
                <Link to={`/users/${user.id}/edit`} role="button" className="btn btn-sm btn-primary action">Edit</Link>               }
              { isAuthenticated && (isAdmin || user.id == currentUser.id) &&
                <button type="button" ref="deleteUserButton" className="btn btn-sm btn-danger action">Delete</button>
              }
            </div>
          </div>
        </div>
        <dl className="row">
          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{ user.email }</dd>
          <dt className="col-sm-3">Role</dt>
          <dd className="col-sm-9">{ user.roleName && user.roleName.charAt(0).toUpperCase() + user.roleName.slice(1) }</dd>
          <dt className="col-sm-3">Birthday</dt>
          <dd className="col-sm-9">{ user.birthday }</dd>
          <dt className="col-sm-3">Genred</dt>
          <dd className="col-sm-9">{ user.gender }</dd>
        </dl>
        <div>
          <h6><b>Description</b></h6>
          <p>{ user.description }</p>
        </div>
        <div className="modal fade delete-user-modal" ref="deleteUserModal" role="dialog">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                <h4 className="modal-title">Delete user</h4>
              </div>
              <div className="modal-body">
                <p>Do you want to delete { user.username } account profile permanently?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary float-xs-left" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger float-xs-right" onClick={(e) => deleteUser(user.id)}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
