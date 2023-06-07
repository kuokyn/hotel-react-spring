import React from 'react'
import '../css/contact.css'
const Contact = () => {
  return (
    <section className='section contact contact-section'>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <div>
              <h1>Как мы можем помочь Вам?</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div>
              <h2>Адрес</h2>
              <p>50, Глухой переулок</p>
              <p>Хорошево</p>
              <p>Москва</p>
            </div>
            <div>
              <h2>Забронировать</h2>
              <p>5050 5050 5050</p>
              <p>5050 5050 5050</p>
              <p>book@crocus.com</p>
            </div>
          </div>
          <div className="col-2">
            <form action="#">
              <input type="text" placeholder="Имя" required />
              <input type="email" placeholder="Email" required />
              <textarea row="20" cols="20" placeholder="Ваше сообщение" required></textarea>
              <button className="btn btn-submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact