import React from 'react'
// import { Link } from 'react-router-dom';
import AuthService from '../services/authService';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.user.name + " " + currentUser.user.surname}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>phone:</strong> {currentUser.user.phone}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.user.email}
      </p>
    </div>
  );
};

export default Profile;