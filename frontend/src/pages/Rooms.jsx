import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useRef} from 'react'
import {Link} from 'react-router-dom'
import {Space} from 'antd';
import RoomImg from '../img/hero.jpg'

import './rooms.css';
const Rooms = () => {

  const [rooms, setRooms] = useState([]);

    const [room, setRoom] = useState({
        room_id: "",
        chambers: "",
        people: "",
        roomType: ""
      });
    const { id } = useParams();
    
      const loadRooms = async () => {
        const result = await axios.get("http://localhost:8080/rooms");
        setRooms(result.data);
      };

      useEffect(() => {
        loadRooms();
      }, []);

      console.log(rooms);

    // make room card compoment react


  return (
    <section className='section room-section'>
        <div className='container room-content'>
            {rooms.map(room => (
              <div className='room-card'>
              <img src={RoomImg} alt={room.name} className='room-img'/>
              <h3>{room.roomType.id} {room.roomType.price}$</h3>
              <div className="room-details">
              <div>
              <button className='book-btn btn'>Book Now</button>
              </div>
              <div>
              <p>Количество людей: {room.people}</p>
              <p>Количество комнат: {room.chambers}</p>
              </div>
              </div>
              </div>
            ))}
        </div>
    </section>
  )
}

export default Rooms