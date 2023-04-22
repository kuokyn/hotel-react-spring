import React from 'react'
import '../../admin.css'
import AuthService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'

const AdminHeader = () => {
  let navigate = useNavigate();
  const logOut = () => {
    AuthService.logout();
    navigate("/");
    
  window.location.reload();
  };
  return (
    <div className='admin-header'>
        <Link href="/login" className="nav-link" onClick={logOut}>
                Выйти
          </Link>
    </div>
  )
}

export default AdminHeader