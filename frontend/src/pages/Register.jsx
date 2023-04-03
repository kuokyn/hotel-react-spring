import axios from 'axios'
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    phone:"",
    password: "",
  })

  const {name, surname, email, phone, password} = user

  const onInputChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value}) // добавление нового объекта
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios.post("http://localhost:8080/register", user);
    navigate("/");
  }
  return (
    <div  className='auth'>
        <h1 className='auth-heading'>Регистрация</h1>
        <form onSubmit={(e)=> onSubmit(e)}  className="auth-form">
            <input required className="auth-input" type={"text"} name="name" placeholder='Имя' onChange={(e) => onInputChange(e)} value={name} />
            <input required className="auth-input" type="text" name="surname" value={surname} onChange={(e)=>onInputChange(e)} placeholder='Фамилия'/>
            <input required className="auth-input" type="email"  name="email" value={email} onChange={(e)=>onInputChange(e)} placeholder='Почта'/>
            <input required className="auth-input" type="text" name="phone" value={phone} onChange={(e)=>onInputChange(e)} placeholder='Номер телефона'/>
            <input  required className="auth-input" id="password" name="password" value={password} onChange={(e)=>onInputChange(e)} type="password" placeholder='Пароль'/>
            <span>Уже зарегистрированы? <Link to="/login">Войти</Link></span>
            <button className='auth-btn'>Зарегистрироваться</button>
        </form>
    </div>
  )
}

export default Register