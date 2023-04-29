import React from 'react'
import './footer.css';
import { FaTelegramPlane } from 'react-icons/fa';
import { SiWhatsapp } from 'react-icons/si';

import {GiTwirlyFlower} from 'react-icons/gi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
const Footer = () => {
  return (
    <section className='footer flex'>
      <div className="footer-container">
      <div className="footer-content container">
        <div className="footer-info">
          <div className="footer-column">
            <div className="footer-item">
            <div className="logo-div">
              <a href="/" className="logo">
                <GiTwirlyFlower className='icon'/> 
                <h1>CROCUS</h1>
              </a>
            </div>
              <h4>Контакты</h4>
              <div className="footer-item-info">
                  <div className="contact-text">
                    <FaTelegramPlane className='icon'/>
                    <span>+7(917)-000-00-00</span>
                  </div>
                  <div className="contact-text">
                    <SiWhatsapp className='icon'/>
                    <span>+7(917)-000-00-00</span>
                  </div>
                  <div className="contact-text">
                    <MdOutlineAlternateEmail className='icon'/>
                    <span>crocus@contact.ru</span>
                  </div>
          </div>
        </div>
          <div className="footer-item">
              <h4>О гостинице</h4>
              <div className="footer-item-info">
                  <div className="contact-text">
                    <span>telegram</span>
                  </div>
                  <div className="contact-text">
                    <span>what's app</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
            </div>
          </div>
          </div>
          <div className="footer-column">
          <div className="footer-item">
              <h4>Правила</h4>
              <div className="footer-item-info">
                  <div className="contact-text">
                    <span>telegram</span>
                  </div>
                  <div className="contact-text">
                    <span>what's app</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
            </div>
          </div>
          <div className="footer-item">
              <h4>Подписаться</h4>
              <div className="footer-item-info">
                  <div className="contact-text">
                    <span>telegram</span>
                  </div>
                  <div className="contact-text">
                    <span>what's app</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
                  <div className="contact-text">
                    <span>email</span>
                  </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-rights'>
        (c) 2023 All rights reserved
      </div>
      </div>
    </section>
  )
}

export default Footer