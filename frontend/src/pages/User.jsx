import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {useEffect, useState} from 'react'

const User = () => {   

    const {id} = useParams();

    const [user, setUser] = useState({
        name: "",
        surname: "",
        phone: "",
        email: ""
    });

    // function phoneValidation(){
    //     const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    //     return regex.test(user.phone);
    // }

    const {name, surname, phone, email} = user;

    const navigate = useNavigate();

    const updateUser = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/admin/users/${id}`, user)
        // .then(res => res.data)
        .catch(err => console.error("Wasn't able to update property.", err))
        .then(navigate("/admin/users"))
    }

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/admin/users/${id}`);
        setUser(result.data);
        // console.log(result.data);
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