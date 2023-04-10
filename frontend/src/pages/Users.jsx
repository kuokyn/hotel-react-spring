import React from 'react'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
// import UserService from '../services/userService'
const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/users")
        .then(res => res.json()) 
        .then(data => setUsers(data));
    }, []);

    // console.log(UserService.getUsers());
    return (
    <div>
        {users.map(user => (
            <div>
              <Link to={`/users/${user.id}`}>
                <span key={user.id}>user: {user.id}</span>
                <span key={user.name}>name: {user.name} </span>
                <span key={user.surname}>surname: {user.surname} </span>
                <span key={user.phone}>phone: {user.phone} </span>
                <span key={user.email}>email: {user.email} </span>
              </Link>
            </div>
        ))}
    </div>
    )
}

export default Users