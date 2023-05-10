import React from 'react'
// import { Link } from 'react-router-dom';
import AuthService from '../services/authService';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const EditProfile = () => {
  const currentUser = AuthService.getCurrentUser();

  const [user, setUser] = useState({
    id: currentUser.user.id,
    name: "",
    surname: "",
    phone: "",
    email: "",
    role: currentUser.user.role,
    password: currentUser.user.password
  });

  // function phoneValidation(){
  //     const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  //     return regex.test(user.phone);
  // }

  useEffect(() => {
    setUser(currentUser.user);
  }, []);

  const { id, name, surname, phone, email, role, password } = user;

  const navigate = useNavigate();

  const updateProfile = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/profile/edit`, user)
      // .then(res => res.data)
      .catch(err => console.error("Wasn't able to update property.", err))
      .then(navigate("/profile"))
    localStorage.setItem("user", JSON.stringify(user));
    window.location.reload();
  }

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <section className='section'>
      <form>
        <input disabled value={id} onChange={(e) => onInputChange(e)} className="user-input" name="id" />
        <input disabled value={password} onChange={(e) => onInputChange(e)} className="user-input" name="password" />
        <input disabled value={role} onChange={(e) => onInputChange(e)} className="user-input" name="role" />
        <input value={name} onChange={(e) => onInputChange(e)} className="user-input" name="name" />
        <input value={surname} onChange={(e) => onInputChange(e)} className="user-input" name="surname" />
        <input value={phone} onChange={(e) => onInputChange(e)} className="user-input" name="phone" />
        <input value={email} onChange={(e) => onInputChange(e)} className="user-input" name="email" />
      </form>
      <div>
        <button onClick={updateProfile}>update</button>
      </div>
    </section>
  );
};

export default EditProfile;