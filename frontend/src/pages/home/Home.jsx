import React from 'react'
import './home.css';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <section className='section home'>
      <div className="hero">
        <div className="hero-title">
          <h1>Отпуск с пользой для здоровья</h1>
          <h2>Незабываемые впечатления без забот</h2>
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
      </div>
    </section>
  )
}

export default Home