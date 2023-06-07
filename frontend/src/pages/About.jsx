import React from 'react'
import '../css/about.css'
import About1 from '../img/about-img-1.jpg'
import About2 from '../img/about-img-2.jpg'
import Brand1 from '../img/brands-1.png'
import Brand2 from '../img/brands-2.png'
import Brand3 from '../img/brands-3.png'
import Brand4 from '../img/brands-4.png'
import Brand5 from '../img/brands-5.png'
import Brand6 from '../img/brands-6.png'

const About = () => {
  return (
    <section className='section about-section'>
      <section id="info" className="info">
        <div className="about-container">
          <div className="row">
            <div className="col-2 padding-right">
              <h1 className="text-green">Гостиница на краю Земли</h1>
              <p className="info-text text-green">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                quia ipsum
                ratione numquam
                amet. Reprehenderit ratione doloremque, repudiandae pariatur sed similique.</p>
              <p className="info-text text-green">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                quia ipsum
                ratione numquam
                amet. Reprehenderit ratione doloremque, repudiandae pariatur sed similique.</p>
            </div>
            <div className="col-2 image-group">
              <img src={About1} alt="image" />
                <img src={About2} alt="image"/>
            </div>
          </div>
        </div>
      </section>

      <section className="excellent-service">
        <div className="about-container">
        </div>
      </section>

      <section className="features">
        <div className="about-container container-medium">
          <div className="row">
            <div className="col-3">
              <i className="fas fa-gift"></i>
              <h4>Специальные предложения</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis eveniet similique!
                Nobis maxime similique officia.</p>
            </div>
            <div className="col-3">
              <i className="fas fa-bed"></i>
              <h4>Ортопедические кровати</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis eveniet similique!
                Nobis maxime similique officia.</p>
            </div>
            <div className="col-3">
              <i className="fas fa-utensils"></i>
              <h4>Шикарная еда</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis eveniet similique!
                Nobis maxime similique officia.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <i className="fas fa-trophy"></i>
              <h4>Высокие рейтинги</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis eveniet similique!
                Nobis maxime similique officia.</p>
            </div>
            <div className="col-3">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Лучшее местоположение</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis eveniet similique!
                Nobis maxime similique officia.</p>
            </div>
            <div className="col-3">
              <i className="fas fa-credit-card"></i>
              <h4>Способы оплаты</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque blanditiis eveniet similique!
                Nobis maxime similique officia.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brands">
        <div className="about-container">
          <div className="slider">
            <div className="slider-box">
              <img src={Brand1} alt="brands"/>
            </div>
            <div className="slider-box">
              <img src={Brand2} alt="brands"/>
            </div>
            <div className="slider-box">
              <img src={Brand3} alt="brands"/>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default About