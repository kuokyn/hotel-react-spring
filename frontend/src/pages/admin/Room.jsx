import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useParams, useNavigate} from 'react-router-dom'

const Room = () => {
  const {id} = useParams();

  const [room, setRoom] = useState({
    id: "",
    chambers: "",
    people: "",
    roomType: {
      id: ""
    }
  });

  const { room_id, chambers, people, roomType } = room;

    const navigate = useNavigate();

    const updateRoom = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/rooms/${id}`, room)
        // .then(res => res.data)
        .catch(err => console.error("Wasn't able to update property.", err))
        .then(navigate("/admin/rooms"))
        window.location.reload();
    }

    useEffect(() => {
        loadRoom();
    }, []);

    const loadRoom = async () => {
        const result = await axios.get(`http://localhost:8080/rooms/${id}`);
        setRoom(result.data);
    }

    const onInputChange = (e) => {
        setRoom({...room, [e.target.name]: e.target.value});
    }
    console.log(room);

    return (
    <div>
        <form>
            <input value={chambers} onChange={(e) => onInputChange(e)} className="room-input" name="chambers"/>
            <input value={roomType.id} onChange={(e) => onInputChange(e)} className="room-input" name="roomType"/>
            <input value={people} onChange={(e) => onInputChange(e)} className="room-input" name="people"/>
            <input value={room.id} onChange={(e) => onInputChange(e)} className="room-input" name="id"/>
        </form>
        <div>
            <button onClick={updateRoom}>update</button>
        </div>
    </div>
    )
}

export default Room