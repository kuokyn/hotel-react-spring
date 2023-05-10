import React from 'react'
import axios from 'axios'
import { useState, useEffect,useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    const [booking, setBooking] = useState({
      room: {
        id: ""
      },
      user: {
        id: ""
      },
      checkIn: "",
      checkOut: ""
    });

    const { room, checkIn, checkOut, user } = booking;
    const { id } = useParams();
    
    const [error, setError] = useState("");
    const errorRef = useRef();
  
    
      const loadBookings = async () => {
        const result = await axios.get("http://localhost:8080/admin/bookings");
        setBookings(result.data);
        console.log(result.data);
      };

      useEffect(() => {
        loadBookings();
        setError("");
      }, []);

      const deleteBooking = async (id) => {
        await axios.delete(`http://localhost:8080/admin/bookings/${id}`);
        loadBookings();
      };


      const onInputChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
      };

      const onSubmit = async (e) => {
        e.preventDefault();
        setError("");
        e.preventDefault();
        await axios.post("http://localhost:8080/admin/bookings", booking).then(
          () => {
            loadBookings();
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
  return (
    <div className='users-container'>
         <div>
          <table>
            <tr>
              <th>ID</th>
              <th>Номер</th>
              <th>Пользователь</th>
              <th>Дата въезда</th>
              <th>Дата выезда</th>
              <th>Кол-во людей</th>
              <th></th>
              <th></th>
            </tr>
            {bookings.map((booking, key) => {
              return (
                <tr key={key}>
                  <td>{booking.id}</td>
                  <td>{booking.room.id}</td>
                  <td>{booking.user.id}</td>
                  <td>{booking.checkIn}</td>
                  <td>{booking.checkOut}</td>
                   <td>{booking.numberOfPeople}</td>
                  <td>
                    <Link className='edit-link'
                          to={`/admin/bookings/${booking.id}`}
                      >
                          Редактировать
                      </Link>
                  </td>
                  <td><button
                          className="btn btn-danger mx-2"
                          onClick={() => deleteBooking(booking.id)}
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
            <h1>Добавить бронирование</h1>
            <span ref={errorRef} className={error ? "error" : "offscreen"} aria-live="assertive">
          {error}
        </span>
            <form onSubmit={(e)=> onSubmit(e)}  className="auth-form">
            <input required className="auth-input" type="number" name="room" placeholder='Номер' onChange={(e) => onInputChange(e)} value={room.id} />
            <input required className="auth-input" type="number" name="user" value={user.id} onChange={(e)=>onInputChange(e)} placeholder='ID-пользователя'/>
            <input required className="auth-input" type="date"  name="checkIn" value={checkIn} onChange={(e)=>onInputChange(e)} placeholder='Дата въезда'/>
            <input required className="auth-input" type="date" name="checkOut" value={checkOut} onChange={(e)=>onInputChange(e)} placeholder='Дата выезда'/>
            {/* <input required className="auth-input" type="number" name="numberOfPeople" value={numberOfPeople} onChange={(e)=>onInputChange(e)} placeholder='Кол-во человек'/> */}

            <button className='auth-btn'>Добавить</button>
        </form>
        </div>
    </div>
    
  )
}

export default Bookings