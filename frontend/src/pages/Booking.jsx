import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        await axios.put(`http://localhost:8080/bookings/${id}`, booking)
        // .then(res => res.data)
        .catch(err => console.error("Wasn't able to update property.", err))
        .then(navigate("/bookings"))
    }

    const loadBooking = async () => {
        const result = await axios.get(`http://localhost:8080/bookings/${id}`);
        setBooking(result.data);
    }

    const onInputChange = (e) => {
        setBooking({...booking, [e.target.name]: e.target.value});
    }

    return (
    <div>
        <form>
            <input value={checkIn} onChange={(e) => onInputChange(e)} className="user-input" name="checkIn"/>
            <input value={checkOut} onChange={(e) => onInputChange(e)} className="user-input" name="checkOut"/>
            <input value={numberOfPeople} onChange={(e) => onInputChange(e)} className="user-input" name="numberOfPeople"/>
            <input value={user.id} onChange={(e) => onInputChange(e)} className="user-input" name="user"/>
            <input value={room.id} onChange={(e) => onInputChange(e)} className="user-input" name="room"/>
        </form>
        <div>
            <button onClick={updateBooking}>update</button>
        </div>
    </div>
    )
}
export default Booking