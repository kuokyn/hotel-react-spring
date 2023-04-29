import React from 'react'
// import { Link } from 'react-router-dom';
import AuthService from '../services/authService';
import { Link } from 'react-router-dom';
import './profile.css';

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <section className='section profile'>
      <div className="container profile-content">
        <div className="jumbotron">
          <h1>Профиль</h1>
          <h3>
            <strong>{currentUser.user.name + " " + currentUser.user.surname}</strong> 
          </h3>
        </div>
        <p>
          <strong>phone:</strong> {currentUser.user.phone}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.user.email}
        </p>
        <Link to="/profile/edit">Edit</Link>
      </div>
      <div className="container home-content">
          <div className="searchBooking flex">
            <div className="checkin-input">
              <label htmlFor="checkin">Дата въезда</label>
              <div className="input flex">
                <input required type="date" />
              </div>
            </div>
            <div className="checkout-input">
              <label htmlFor="checkout">Дата выезда</label>
              <div className="input flex">
                <input required type="date" />
              </div>
            </div>
            <div className="people-input">
              <label htmlFor="people">Взрослые</label>
              <div className="input flex">
                <input required placeholder="0" type="text" />
              </div>
            </div>
            <div className="price-input">
              <label htmlFor="price">Цена</label>
              <div className="input flex">
                <span>1500</span>
                <input required type="range" max="10000" min="1500" />
                <span>10000</span>
              </div>
            </div>
            <button className='search-btn btn'>
              <Link to={"/login"}>
                Найти
              </Link>
            </button>
          </div>
        </div>
    </section>
  );
};

export default Profile;