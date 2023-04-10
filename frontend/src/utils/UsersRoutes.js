import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'
import AuthService from '../services/authService';

const UsersRoutes = () => {
    let auth = AuthService.getCurrentUser();
    if (!auth){
      console.log("Не авторизован");
      return (
        <Navigate to="/login"/>
      )
    }
  return (
    auth.token && auth.user.role === "ROLE_USER" ? <Outlet/> : <Navigate to="/login"/>
  )
}

export default UsersRoutes