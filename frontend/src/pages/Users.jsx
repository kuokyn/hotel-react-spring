import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useParams} from 'react-router-dom'
// import UserService from '../services/userService'
import { Space } from 'antd';
import './users.css'
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
        const result = await axios.get("http://localhost:8080/admin/users");
        setUsers(result.data);
      };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/admin/users/${id}`);
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
        await axios.post("http://localhost:8080/admin/users", user).then(
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
      <div className='users-container'>
         <div>
          <table>
            <tr>
              <th>ID</th>
              <th>Имя</th>
              <th>Фамилия</th>
              <th>Телефон</th>
              <th>Почта</th>
              <th></th>
              <th></th>
            </tr>
            {users.map((user, key) => {
              return (
                <tr key={key}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.surname}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link className='edit-link'
                          to={`/admin/users/${user.id}`}
                      >
                          Редактировать
                      </Link>
                  </td>
                  <td><button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteUser(user.id)}
                      >
                          Удалить
                      </button>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
        <div className='add-user-form'>
            <h1>Добавить пользователя</h1>
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
    </div>
    )
}

export default Users