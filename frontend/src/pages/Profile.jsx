import React from 'react'
// import { Link } from 'react-router-dom';
import AuthService from '../services/authService';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <section className='section'>
      <div className="container-item">
        <div className="jumbotron">
          <h3>
            <strong>{currentUser.user.name + " " + currentUser.user.surname}</strong> Profile
          </h3>
        </div>
        <p>
          <strong>phone:</strong> {currentUser.user.phone}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.user.email}
        </p>
      </div>
    </section>
  );
};

export default Profile;