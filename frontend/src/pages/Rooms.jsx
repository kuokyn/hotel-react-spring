import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Space } from 'antd';
import RoomImg1 from '../img/room-2.jpg'
import RoomImg2 from '../img/room-5.jpg'
import RoomImg3 from '../img/room-4.jpg'
import RoomImg4 from '../img/room-6.jpg'
import RoomImg5 from '../img/room-3.jpg'
import '../css/rooms.css';
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
            {console.log(parseInt(room.room_id))}
            {(parseInt(room.id) % 5 == 0) ? <img src={RoomImg2} alt={room.name} className='room-img' /> : 
              (parseInt(room.id % 5) == 1) ? <img src={RoomImg1} alt={room.name} className='room-img' /> : 
              (parseInt(room.id % 5) == 2) ? <img src={RoomImg4} alt={room.name} className='room-img' /> : 
              (parseInt(room.id % 5) == 3) ? <img src={RoomImg3} alt={room.name} className='room-img' /> : 
               <img src={RoomImg5} alt={room.name} className='room-img' />
            }
            <h3>{room.roomType.id} {room.roomType.price}$</h3>
            <div className="room-details">
              <p>Количество людей: {room.people}</p>
              <p>Количество комнат: {room.chambers}</p>
              <div>
                <button className='book-btn btn'>Забронировать</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rooms