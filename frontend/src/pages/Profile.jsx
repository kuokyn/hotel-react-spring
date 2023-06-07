import React from 'react'
// import { Link } from 'react-router-dom';
import AuthService from '../services/authService';
import { Link } from 'react-router-dom';
import '../css/profile.css';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <section className='section profile'>
      <div className='profile-box'>
        <form className="profile-box-form">
          <label htmlFor="name">Имя</label>
          <input required disabled className="profile-box-input" type={"text"} name="name" placeholder='Имя' value={currentUser.user.name} />
          <label htmlFor="surname">Фамилия</label>
          <input required disabled className="profile-box-input" type="text" name="surname" value={currentUser.user.surname} placeholder='Фамилия' />
          <label htmlFor="email">Почта</label>
          <input required disabled className="profile-box-input" type="email" name="email" value={currentUser.user.email} placeholder='Почта' />
          <label htmlFor="phone">Номер телефона</label>
          <input required disabled className="profile-box-input" type="text" name="phone" value={currentUser.user.phone} placeholder='Номер телефона' />
        </form>
      </div>
    </section >
  );
};

export default Profile;