import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AuthService from '../services/authService';
import { Link } from 'react-router-dom';
import { AiTwotoneEdit, AiTwotoneDelete } from 'react-icons/ai';
import '../css/mybookings.css';
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

  const deleteBooking = async (id) => {
    await axios.delete(`http://localhost:8080/bookings/${id}`);
    loadMyBookings();
  };

  console.log(myBookings); 

  useEffect(() => {
   
    loadMyBookings();
  }, []);

  // const deleteMyBooking = async (id) => {
  //   await axios.delete(`http://localhost:8080/mybookings`);
  //   loadBookings();
  // };

  return (
    <section className='section'>
      <div className='mybookings-container'>
        <div>        <table>
          <tr>
            <th>ID</th>
            <th>Номер</th>
            <th>Дата въезда</th>
            <th>Дата выезда</th>
            <th>Кол-во людей</th>
            <th>Стоимость</th>
            <th>Редактировать</th>
            <th>Отменить</th>
          </tr>
          {myBookings.map((booking, index) => {
            if (currentUser.user.phone === booking.user.phone) {
              return <tr>
                <td>{booking.id}</td>
                <td>{booking.room.roomType.id}</td>
                <td>{booking.checkIn}</td>
                <td>{booking.checkOut}</td>
                <td>{booking.numberOfPeople}</td>
                <td>{booking.room.roomType.price}</td>
                <td>
                  <Link to={`/booking/${booking.id}`} className="btn"><AiTwotoneEdit /></Link>
                </td>
                <td><button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteBooking(booking.id)}
                >
                  <AiTwotoneDelete/>
                </button>
                </td>
              </tr>
            }
          })}
        </table>
        </div>

      </div>
    </section>
  )
}

export default MyBookings