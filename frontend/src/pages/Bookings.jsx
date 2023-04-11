import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    
    const { id } = useParams();
    
      const loadBookings = async () => {
        const result = await axios.get("http://localhost:8080/bookings");
        setBookings(result.data);
      };

      useEffect(() => {
        loadBookings();
      }, []);

      const deleteBooking = async (id) => {
        await axios.delete(`http://localhost:8080/bookings/${id}`);
        loadBookings();
      };

  return (
    <div>
            {bookings.map(booking => (
                <div>
                    <span key={booking.id}>booking id: {booking.id} </span>
                    <span key={booking.room.id}>room id: {booking.room.id} </span>
                    <span key={booking.user.phone}>phone of user: {booking.user.phone} </span>
                    <span key={booking.user.name}>name of user: {booking.user.name} </span>
                    <span key={booking.user.surname}>surname of user: {booking.user.surname} </span>
                    <span key={booking.checkIn}>check-in-date: {booking.checkIn} </span>
                    <span key={booking.checkOut}>check-out-date: {booking.checkOut} </span>
                    <Link
                        to={`/bookings/${booking.id}`}
                    >
                        Edit
                    </Link>
                <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteBooking(booking.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
  )
}

export default Bookings