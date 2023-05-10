import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {useRef} from 'react'
import {Link} from 'react-router-dom'
import {Space} from 'antd';

const Rooms = () => {

  const [rooms, setRooms] = useState([]);

    // const [room, setRoom] = useState({
    //     id: "",
    //     chambers: "",
    //     people: "",
    //     roomType: {
    //       price: "",
    //     }
    //   });
    const { id } = useParams();
    
      const loadRooms = async () => {
        const result = await axios.get("http://localhost:8080/admin/rooms");
        setRooms(result.data);
      };

    // const deleteRoom = async (id) => {
    //     await axios.delete(`http://localhost:8080/admin/rooms/${id}`);
    //     loadRooms();
    //   };
    //   const [error, setError] = useState("");
    //   const errorRef = useRef();
    
      useEffect(() => {
        loadRooms();
        // setError("");
      }, []);

      console.log(rooms);

    
  return (
    <div className='users-container'>
         <div>
          <table>
            <tr>
              <th>ID</th>
              <th>Тип</th>
              <th>Цена</th>
              <th>Комнаты</th>
              <th>Вместимость</th>
              <th></th>
            </tr>
            {rooms.map((room, key) => {
              return (
                <tr key={key}>
                  <td>{room.id}</td>
                  <td>{room.roomType.id}</td>
                  <td>{room.roomType.price}</td>
                  <td>{room.chambers}</td>
                  <td>{room.people}</td>
                  <td>
                    <Link className='edit-link'
                          to={`/admin/rooms/${room.id}`}
                      >
                          Редактировать
                      </Link>
                  </td>
                </tr>
              )
            })}
          </table>
        </div>
    </div>
  )
}

export default Rooms