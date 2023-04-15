import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
    
      const loadMyBookings = async () => {
        const result = await axios.get("http://localhost:8080/mybookings");
        setMyBookings(result.data);
      };

      useEffect(() => {
        loadMyBookings();
      }, []);

      // const deleteMyBooking = async (id) => {
      //   await axios.delete(`http://localhost:8080/mybookings`);
      //   loadBookings();
      // };
      console.log(myBookings);
  return (
    <div>
      my
  </div>
  )
}

export default MyBookings