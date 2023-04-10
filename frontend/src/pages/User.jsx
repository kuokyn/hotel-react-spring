import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const User = () => {   

    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        surname: "",
        phone: "",
        email: ""
    });

    const {name, surname, phone, email} = user;

    const navigate = useNavigate();

    const updateUser = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/users/${id}`, user)
        // .then(res => res.data)
        .catch(err => console.error("Wasn't able to update property.", err))
        .then(navigate("/users"))
    }

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/users/${id}`);
        setUser(result.data);
    }

    const onInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
    <div>
        <form>
            <input value={name} onChange={(e) => onInputChange(e)} className="user-input" name="name"/>
            <input value={surname} onChange={(e) => onInputChange(e)} className="user-input" name="surname"/>
            <input value={phone} onChange={(e) => onInputChange(e)} className="user-input" name="phone"/>
            <input value={email} onChange={(e) => onInputChange(e)} className="user-input" name="email"/>
        </form>
        <div>
            <button onClick={updateUser}>update</button>
        </div>
    </div>
    )
}

export default User