import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
      <div className="navbar-container">
        <div className="navbar">
            <div className="links">
            <Link className="nav-link" to="/">Главная</Link>
            <Link className="nav-link" to="/rooms">Номера</Link>
            <Link className="nav-link" to="/about">О нас</Link>
            <Link className="nav-link" to="/contact">Контакты</Link>
            <Link className="nav-link" to="/login">Войти</Link>
          </div>
        </div>
      </div>
  )
}

export default Navbar