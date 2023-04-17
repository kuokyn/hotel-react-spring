import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Dashboard'
const AdminPageContent = () => {
    return (
        <Routes>
          <Route path="/admin" element={<Dashboard />}></Route>
          {/* <Route path="/inventory" element={<Inventory />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
          <Route path="/customers" element={<Customers />}></Route> */}
        </Routes>
      );
}

export default AdminPageContent