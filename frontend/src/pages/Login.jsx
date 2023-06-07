import React , {useRef, useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
// import axios from '../api/axios'
import AuthService from '../services/authService';
import '../css/auth.css';
function Login() {

  let navigate = useNavigate();

  const phoneRef = useRef();
  const errorRef = useRef();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    phoneRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [phone, password]);


  const onSubmit = async (e) => {
    e.preventDefault(); // не обновлять страницу
    setError("");
      AuthService.login(phone, password).then(
        () => {
          navigate("/");
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
    <div className="auth">
        <h1 className="auth-heading">Вход</h1>
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
        <span ref={errorRef} style={{color: "red"}} className={error ? "error" : "offscreen"} aria-live="assertive">
          {error}
        </span>
            <input ref={phoneRef} onChange={(e) => setPhone(e.target.value)} required className="auth-input" name="phone" value={phone} type="text" placeholder='Номер телефона'/>
            <input onChange={(e) => setPassword(e.target.value)}required className="auth-input" name="password" value={password} type="password" placeholder='Пароль'/>
            <button className="auth-btn">Войти</button>
            <span>Нет аккаунта? <Link to="/register">Зарегистрируйся!</Link></span>
        </form>
    </div>
    </section>
  )
}

export default Login