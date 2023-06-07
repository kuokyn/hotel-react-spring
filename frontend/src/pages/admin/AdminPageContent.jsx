import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
import AdminRoutes from '../../utils/AdminRoutes'
import Bookings from './Bookings'
import Booking from './Booking'
import Rooms from './Rooms'
import Room from './Room'
import Users from './Users'
import User from './User'
import Services from './Services'
import Workers from './Workers'
import Worker from './Worker'
import Error404 from '../Error404'

const AdminPageContent = () => {
    return (
        <Routes>
          {/* <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/customers" element={<Customers />}></Route> */}
          <Route element={<AdminRoutes/>}>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/admin" element={<Dashboard />}></Route>
                {/* <Route exact path="/profile" element={<Profile/>} /> */}
                <Route exact path="/admin/bookings" element={<Bookings/>} />
                <Route exact path="/admin/bookings/:id" element={<Booking/>} />
                <Route exact path="/admin/rooms" element={<Rooms/>} />
                <Route exact path="/admin/services" element={<Services/>} />
                <Route exact path="/admin/workers" element={<Workers/>} />
                <Route exact path="/admin/workers/:id" element={<Worker/>} />
                <Route exact path="/admin/rooms/:id" element={<Room/>} />
                <Route exact path="/admin/users" element={<Users/>} />
                <Route exact path="/admin/users/:id" element={<User/>} />
                <Route path="*" element={<Error404/>} status={404}/>
          </Route>
        </Routes>
      );
}

export default AdminPageContent