import React , {useRef, useState, useEffect, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from '../api/axios'
import AuthContext from '../api/AuthProvider';

function Login() {

  const {setAuth} = useContext(AuthContext);

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
    try {
      // console.log(JSON.stringify({phone, password}));

      const response = await axios.post("http://localhost:8080/login", 
                                      JSON.stringify({phone, password}), {
                                        headers: {
                                          "Content-Type": "application/json"
                                        },
                                          withCredentials: true
                                      });
      console.log(JSON.stringify(response?.data));
      const token = response?.data?.token;
      const role = response?.data?.role;
      setAuth({phone, password, token, role});
      navigate("/");
    } catch (e) {
      if (!error?.response) {
        setError("Нет ответа от сервера");
      } 
      else if (error.response?.status === 400) {
        setError("Не введен пароль или телефон");
      }
      else if (error.response?.status === 401) {
        setError("Неправильное имя пользователя или пароль");
      } else {
        setError("Неизвестная ошибка");
      }
      error.current.focus();
    }
  }

  return (
    <div className="auth">
        <h1 className="auth-heading">Вход</h1>
        
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
        <span ref={errorRef} className={error ? "error" : "offscreen"} aria-live="assertive">
          {error}
        </span>
            <input ref={phoneRef} onChange={(e) => setPhone(e.target.value)} required className="auth-input" name="phone" value={phone} type="text" placeholder='Номер телефона'/>
            <input onChange={(e) => setPassword(e.target.value)}required className="auth-input" name="password" value={password} type="password" placeholder='Пароль'/>
            {/* <input style={{ display: "none" }} className="auth-input" type={"text"} name="name" value="" placeholder='Имя' />
            <input style={{ display: "none" }} className="auth-input" type="text" name="surname" value="" placeholder='Фамилия'/>
            <input style={{ display: "none" }} className="auth-input" type="email"  name="email" value="" placeholder='Почта'/> */}
            <button className="auth-btn">Войти</button>
            {/* <span className='auth-error'>Неправильное имя пользователя или пароль</span> */}
            <span>Нет аккаунта? <Link to="/register">Зарегистрируйся!</Link></span>
        </form>
    </div>
  )
}

export default Login