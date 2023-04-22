import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react';

const MyBookings = () => {

  // ниче не работает 
  // решение - фетчить все бронирования и фильтровать тут через телефон пользователя
  // нужно достать телефон текущего пользователя и сравнивать его с каждым полем пользователя в бронировании
  // это вообще не рационально и неэффективно и небезопасно, но я не знаю другого решения
  // ибо гет с mybookings тупо не работает



  const [myBookings, setMyBookings] = useState([]);

  const loadMyBookings = async () => {
    const resultBooking = await axios.get("http://localhost:8080/mybookings");
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
    <div>my</div>
  </section>
  )
}

export default MyBookings