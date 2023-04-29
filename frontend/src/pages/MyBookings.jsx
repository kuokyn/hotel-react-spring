import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import AuthService from '../services/authService';
import { Link } from 'react-router-dom';

const MyBookings = () => {

  // ниче не работает 
  // решение - фетчить все бронирования и фильтровать тут через телефон пользователя
  // нужно достать телефон текущего пользователя и сравнивать его с каждым полем пользователя в бронировании
  // это вообще не рационально и неэффективно и небезопасно, но я не знаю другого решения
  // ибо гет с mybookings тупо не работает


  const currentUser = AuthService.getCurrentUser();
  const [myBookings, setMyBookings] = useState([]);

  const loadMyBookings = async () => {
    const resultBooking = await axios.get("http://localhost:8080/bookings");
      setMyBookings(resultBooking.data);
  };

  console.log(myBookings); // пусто

  useEffect(() => {
    loadMyBookings();
  }, []);

      // const deleteMyBooking = async (id) => {
      //   await axios.delete(`http://localhost:8080/mybookings`);
      //   loadBookings();
      // };
      
  return (
    <section className='section'>
    <div>{
              myBookings.map((booking, index) => {
                if (currentUser.user.phone === booking.user.phone) {
                  return <tr>
                    <td>{booking.id}</td>
                    <td>{booking.checkIn}</td>
                    <td>{booking.checkOut}</td>
                    <td>{booking.room.roomType.id}</td>
                    {/* <td>
                      <Link to={`/view_visit_user/${booking.visitCode}`} className="btn btn-success mx-2">Просмотреть</Link>
                    </td> */}
                  </tr>
                }
                return null;
              })}</div>
  </section>
  )
}

export default MyBookings