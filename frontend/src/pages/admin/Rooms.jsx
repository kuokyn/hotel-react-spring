import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useRef} from 'react'
import {Link} from 'react-router-dom'
import {Space} from 'antd';

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

    const deleteRoom = async (id) => {
        await axios.delete(`http://localhost:8080/rooms/${id}`);
        loadRooms();
      };
      const [error, setError] = useState("");
      const errorRef = useRef();
    
      useEffect(() => {
        loadRooms();
        setError("");
      }, []);

      console.log(rooms);

    
  return (
    <Space size={20} direction="vertical">
        <div>
            {rooms.map(room => (
                <div>
                    <span key={room.id}>room: {room.id}</span>
                    <span key={room.chambers}>chambers: {room.chambers} </span>
                    <span key={room.roomType.name}>name: {room.roomType.name} </span>
                    <span key={room.chambers}>chambers: {room.chambers} </span>
                <Link
                        to={`/admin/rooms/${room.id}`}
                    >
                        Edit
                    </Link>
                <button
                        className="btn btn-danger mx-2"
                        onClick={() => deleteRoom(room.id)}
                    >
                        Delete
                    </button>
                </div>
            ))}
        </div>
    </Space>
  )
}

export default Rooms