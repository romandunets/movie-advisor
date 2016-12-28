import React, { Component } from 'react';
import { Link } from 'react-router';

class UserCard extends Component {
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
      </div>
    );
  }
}

export default UserCard;
