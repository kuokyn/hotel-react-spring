import React, {useState, useRef, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import AuthService from '../services/authService';
import './auth.css';
const Register = () => {

  let navigate = useNavigate();

  const [error, setError] = useState("");
  const errorRef = useRef();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  useEffect(() => {
    setError("");
  }, [phone, password]);

  const onChangeName = (e) => {
    const name = e.target.value;
    setName(name); // добавление нового объекта
  }

  const onChangeSurname = (e) => {
    const surname = e.target.value;
    setSurname(surname); // добавление нового объекта
  }

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email); // добавление нового объекта
  }

  const onChangePhone = (e) => {
    const phone = e.target.value;
    setPhone(phone); // добавление нового объекта
  }

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password); // добавление нового объекта
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    AuthService.register(phone, name, surname, email, password).then(
      () => {
        navigate("/login");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

          setError(resMessage);
      }
    );
  }
  
  return (
    <section className='section'>
    <div  className='auth'>
        <h1 className='auth-heading'>Регистрация</h1>
        <span ref={errorRef} className={error ? "error" : "offscreen"} aria-live="assertive">
          {error}
        </span>
        <form onSubmit={(e)=> onSubmit(e)}  className="auth-form">
            <input required className="auth-input" type={"text"} name="name" placeholder='Имя' onChange={(e) => onChangeName(e)} value={name} />
            <input required className="auth-input" type="text" name="surname" value={surname} onChange={(e)=>onChangeSurname(e)} placeholder='Фамилия'/>
            <input required className="auth-input" type="email"  name="email" value={email} onChange={(e)=>onChangeEmail(e)} placeholder='Почта'/>
            <input required className="auth-input" type="text" name="phone" value={phone} onChange={(e)=>onChangePhone(e)} placeholder='Номер телефона'/>
            <input  required className="auth-input" id="password" name="password" value={password} onChange={(e)=>onChangePassword(e)} type="password" placeholder='Пароль'/>
            <span>Уже зарегистрированы? <Link to="/login">Войти</Link></span>
            <button className='auth-btn'>Зарегистрироваться</button>
        </form>
    </div>
    </section>
  )
}

export default Register