import React from 'react'
import { Link } from 'react-router-dom';
import { GiTwirlyFlower } from 'react-icons/gi';
import '../../admin.css'
import {Menu} from 'antd';
const AdminBar = () => {
  return (
    <div className='admin-navbar'>
      <div className="logo-div">
          <a href="/" className="logo">
            <GiTwirlyFlower className='icon'/> 
            <h2>CROCUS</h2>
          </a>
        </div>
    <Menu items={[
      {
        label: "Главная",
        key: '/admin'
      },
      {
        label: "Бронирования",
        key: '/admin/bookings'
      },
      {
        label: "Пользователи",
        key: '/admin/users'
      },
      {
        label: "Номера",
        key: '/admin/rooms'
      },
    ]}>
    
    </Menu>
    </div>
  )
}

export default AdminBar