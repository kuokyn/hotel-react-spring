import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'
import authHeader from "../services/authHeader";

const User = () => {   

    const [surname, setSurname] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${id}`, { headers: authHeader() })
        .then((response) => {
            setUser(response.data);
            setSurname(response.data.surname);
            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setPassword(response.data.password);
            setRole(response.data.role);
        })
    }, []);

    const data = {
        surname: surname,
        name: name,
        email: email,
        phone: phone,
        password: password,
        role: role
    };

    function updateUser(e) {
        e.preventDefault();
        axios.put(`http://localhost:3000/users/${id}`, data).then(navigate("/users"));
    }

    const navigate = useNavigate();

    return (
    <div>
        <form>
            <input disabled value={user.id} className="user-input" name="id"/>
            <input value={user.name} onChange={(e) => setName(e.target.value)} className="user-input" name="name"/>
            <input value={user.surname} onChange={(e) => setSurname(e.target.value)} className="user-input" name="surname"/>
            <input value={user.phone} onChange={(e) => setPhone(e.target.value)} className="user-input" name="phone"/>
            <input value={user.email} onChange={(e) => setEmail(e.target.value)} className="user-input" name="email"/>
            <input value={user.role} onChange={(e) => setRole(e.target.value)} className="user-input" name="role"/>
        </form>
        <div>
            <button onClick={updateUser}>update</button>
        </div>
    </div>
    )
}

export default User