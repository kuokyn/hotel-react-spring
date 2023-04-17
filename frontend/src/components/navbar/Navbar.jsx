import React from 'react'
import { Link } from 'react-router-dom';
import { GiTwirlyFlower } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import {RxHamburgerMenu} from 'react-icons/rx'
import AuthService from '../../services/authService';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import './navbar.css';
function Navbar() {

  const [active, setActive] = useState('navbar');
  const showNav = () => {
    setActive('active-navbar');
  }

  const [showAdmin, setShowAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdmin(user.user.role === "ROLE_ADMIN");
    }
  }, []);

  let navigate = useNavigate();

  const logOut = () => {
    AuthService.logout();
    navigate("/");
    
  window.location.reload();
  };

  return (
    <section className='navbar-section'>
      <header className="header flex">
        <div className="logo-div">
          <a href="/" className="logo">
            <GiTwirlyFlower className='icon'/> 
            <h1>CROCUS</h1>
          </a>
        </div>
      <div className={active}>
        <ul className="nav-list flex">
          <li className="nav-item">
            <Link className="nav-link" to="/">Главная</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/rooms">Номера</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">О нас</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Контакты</Link>
          </li>
          {currentUser ? (
            <li className="nav-item">
              <Link href="/login" className="nav-link" onClick={logOut}>
                Выйти
              </Link>
              </li>
            ) : (
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Войти
              </Link>
            </li>
            )}
          {currentUser && !showAdmin && (
            <li className="nav-item">
                  <Link to={"/mybookings"} className="nav-link">
                    Мои бронирования
                  </Link>
                  
            </li>
          )}
          {currentUser && !showAdmin && (
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                Профиль
              </Link>
          </li>
          )}
          {showAdmin && (
            <li className="nav-item">
                  <Link to={"/bookings"} className="nav-link">
                    Брони
                  </Link>
            </li>
          )}
          {showAdmin && (
            <li className="nav-item">
                    <Link to={"/users"} className="nav-link">
                      Пользователи
                    </Link>
                    
            </li>
          )}
          {showAdmin && (
            <li className="nav-item">
                    <Link to={"/admin"} className="nav-link">
                      Панель администратора
                    </Link>
                    
            </li>
          )}
        </ul>
        <div className="nav-close">
          <GrFormClose className='icon' color='rgb(0, 115, 168)'/>
        </div>
      </div>
      <div onClick={showNav} className="nav-toggle">
        <RxHamburgerMenu className='icon'/>
      </div>
      </header>
    </section>
  )
}

export default Navbar