import React from 'react'
import { Link } from 'react-router-dom';

import AuthService from '../services/authService';
import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [showAdminBar, setShowAdminBar] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdminBar(user.user.role === "ROLE_ADMIN");
    }
  }, []);

  let navigate = useNavigate();

  const logOut = () => {
    AuthService.logout();
    navigate("/");
    
  window.location.reload();
  };

  return (
      <div className="navbar-container">
        <div className="navbar">
            <div className="links">
            <Link className="nav-link" to="/">Главная</Link>
            {showAdminBar && (
              <Link to={"/users"} className="nav-link">
                Пользователи
              </Link>
          )}
            <Link className="nav-link" to="/rooms">Номера</Link>
            <Link className="nav-link" to="/about">О нас</Link>
            <Link className="nav-link" to="/contact">Контакты</Link>
            {currentUser && (
              <Link to={"/profile"} className="nav-link">
                Профиль
              </Link>
          )}
          {currentUser ? (
           <div>
              <Link to={"/profile"} className="nav-link">
                {currentUser.name}
              </Link>
              <Link href="/login" className="nav-link" onClick={logOut}>
                Выйти
              </Link>
          </div>
        ) : (
          <div>
              <Link to={"/login"} className="nav-link">
                Войти
              </Link>
          </div>
        )}
          </div>
        </div>
      </div>
  )
}

export default Navbar