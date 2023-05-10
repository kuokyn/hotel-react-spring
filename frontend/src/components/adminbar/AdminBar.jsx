import React from 'react'
import { Link } from 'react-router-dom';
import { GiTwirlyFlower } from 'react-icons/gi';
import '../../admin.css'
import {Menu} from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppstoreOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';

const AdminBar = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  return (
    <div className='admin-navbar'>
      <div className="logo-div">
          <a href="/" className="logo">
            <GiTwirlyFlower className='icon'/> 
            <h2>CROCUS</h2>
          </a>
        </div>
    <Menu className="admin-navbar-vertical" 
    mode="vertical" 
    onClick={(item) =>{
      navigate(item.key);
    }}
    selectedKeys={[selectedKeys]}
    items={[
      {
        label: "Главная",
        icon: <AppstoreOutlined />,
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
      {
        label: "Счета за бронирования",
        key: '/admin/checkouts'
      },
      {
        label: "Заявки",
        key: '/admin/requests'
      },
      {
        label: "Профиль",
        key: '/admin/profile'
      }
    ]}>
    
    </Menu>
    </div>
  )
}

export default AdminBar