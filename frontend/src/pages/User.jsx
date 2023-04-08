import React from 'react'
import { useState, useEffect } from 'react';

// import UserService from '../services/userService'
const User = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/users/1")
        .then(res => res.json()) 
        .then(data => setUser(data));
    }, []);

    console.log(user);
    return (
    <div>
            <div>
            <span key={user.id}>user: {user.id}</span>
            <span key={user.name}>name: {user.name} </span>
            <span key={user.surname}>surname: {user.surname} </span>
            <span key={user.phone}>phone: {user.phone} </span>
            <span key={user.email}>email: {user.email} </span>
            </div>
    </div>
    )
}

export default User