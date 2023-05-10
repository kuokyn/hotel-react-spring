import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './booking.css'

export const Booking = () => {
    const {id} = useParams();

    const [booking, setBooking] = useState({
        user: {
            id: ""
        },
        checkIn: "",
        checkOut: "",
        room: {
            id: ""
        },
        numberOfPeople: "",
    });

    const {user, room, checkIn, checkOut, numberOfPeople} = booking;

    useEffect(() => {
        loadBooking();
    }, []);

    const navigate = useNavigate();

    const updateBooking = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/admin/bookings/${id}`, booking)
        // .then(res => res.data)
        .catch(err => console.error("Wasn't able to update property.", err))
        .then(navigate("/admin/bookings"))
    }

    const loadBooking = async () => {
        const result = await axios.get(`http://localhost:8080/admin/bookings/${id}`);
        setBooking(result.data);
    }

    const onInputChange = (e) => {
        setBooking({...booking, [e.target.name]: e.target.value});
    }

    return (
    <div>
        <form>
            <table>
                <tr>
                <th>Наименование</th>
                <th>Поле</th>
                </tr>
                <tr>
                  <td><label for='checkIn'>Дата въезда</label></td>
                  <td><input value={checkIn} onChange={(e) => onInputChange(e)} className="auth-input" name="checkIn"/></td>
                </tr>
                <tr>
                  <td><label for='checkOut'>Дата выезда</label></td>
                  <td><input value={checkOut} onChange={(e) => onInputChange(e)} className="auth-input" name="checkOut"/></td>
                </tr>
                <tr>
                  <td><label for='numberOfPeople'>Кол-во людей</label></td>
                  <td><input value={numberOfPeople} onChange={(e) => onInputChange(e)} className="auth-input" name="numberOfPeople"/></td>
                  </tr>
                  <tr>
                  <td><label for='room'>Номер</label></td>
                  <td><input value={room.id} onChange={(e) => onInputChange(e)} className="auth-input" name="room"/></td>
                </tr>
                <tr>
                  <td><label for='user'>Пользователь</label></td>
                  <td><input disabled value={user.id} onChange={(e) => onInputChange(e)} className="auth-input" name="user"/></td>
                </tr>
            </table>
            <button onClick={updateBooking} className='btn btn-warning'>update</button>
        </form>
        <div>
            
        </div>
    </div>
    )
}
export default Booking