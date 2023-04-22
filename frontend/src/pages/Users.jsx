import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useParams} from 'react-router-dom'
// import UserService from '../services/userService'
import { Space } from 'antd';

const Users = () => {
    const [users, setUsers] = useState([]);

    const [user, setUser] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        password: ""
      });

    const { name, surname, email, phone, password } = user;
    const { id } = useParams();
    
      const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
      };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/users/${id}`);
        loadUsers();
      };
      const [error, setError] = useState("");
      const errorRef = useRef();
    
      useEffect(() => {
        loadUsers();
        setError("");
      }, []);


      const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        e.preventDefault();
        await axios.post("http://localhost:8080/users", user).then(
          () => {
            loadUsers();
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
    // console.log(UserService.getUsers());
    return (
      <Space size={20} direction="vertical">
        <div>
            <h1>добавить пользователя</h1>
            <span ref={errorRef} className={error ? "error" : "offscreen"} aria-live="assertive">
          {error}
        </span>
            <form onSubmit={(e)=> onSubmit(e)}  className="auth-form">
            <input required className="auth-input" type={"text"} name="name" placeholder='Имя' onChange={(e) => onInputChange(e)} value={name} />
            <input required className="auth-input" type="text" name="surname" value={surname} onChange={(e)=>onInputChange(e)} placeholder='Фамилия'/>
            <input required className="auth-input" type="email"  name="email" value={email} onChange={(e)=>onInputChange(e)} placeholder='Почта'/>
            <input required className="auth-input" type="text" name="phone" value={phone} onChange={(e)=>onInputChange(e)} placeholder='Номер телефона'/>
            <input  required className="auth-input" id="password" name="password" value={password} onChange={(e)=>onInputChange(e)} type="password" placeholder='Пароль'/>
            
            <button className='auth-btn'>Добавить</button>
        </form>
        </div>
        <div>
            {users.map(user => (
                <div>
                    <span key={user.id}>user: {user.id}</span>
                    <span key={user.name}>name: {user.name} </span>
                    <span key={user.surname}>surname: {user.surname} </span>
                    <span key={user.phone}>phone: {user.phone} </span>
                    <span key={user.email}>email: {user.email} </span>
                <Link
                        to={`/admin/users/${user.id}`}
                    >
                        Edit
                    </Link>
                <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteUser(user.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    </Space>
    )
}

export default Users