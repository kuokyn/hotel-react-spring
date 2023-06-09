import './css/style.css';
import './css/admin.css';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import {Space} from 'antd';
import { useState, useEffect } from 'react';
import AuthService from './services/authService';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import UsersRoutes from './utils/UsersRoutes';
import Error404 from './pages/Error404';
import MyBookings from './pages/MyBookings';
import Booking from './pages/Booking';
import Footer from './components/Footer';
import AdminBar from './components/AdminBar';
import AdminHeader from './components/AdminHeader';
import AdminPageContent from './pages/admin/AdminPageContent';
import AddBooking from './pages/AddBooking';
// import EditProfile from './pages/EditProfile';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdmin(user.user.role === "ROLE_ADMIN");
    }
  }, []);

  return (
    <>
      {/* <div className="container"> */}
      <Router>
        {showAdmin && (
          <>
          <AdminHeader/>
          <Space/>
          <div className="SideMenuAndPageContent">
          <AdminBar/>
          <AdminPageContent/>
          </div>
          </>
          )}
          {!showAdmin && (
           <Navbar />
          )}
          <Routes>
              <Route element={<UsersRoutes/>}>
                <Route exact path="/profile" element={<Profile/>} />
                <Route exact path="/booking/:id" element={<Booking/>} />
                <Route exact path="/bookings" element={<MyBookings/>} />
                <Route exact path="/bookings/add/:id" element={<AddBooking/>} />
              </Route>
              {!showAdmin && (
                <>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/rooms" element={<Rooms/>} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/login" element={<Login/>} />
                <Route exact path="/register" element={<Register/>} />
                <Route path="*" element={<Error404/>} status={404}/>
                </>
              )}
          </Routes>
          {!showAdmin && (
           <Footer />
          )}
          {showAdmin && (
          <>
          <Space/>
          </>
          )}
      </Router>
     {/* </div> */}
    </>
  );
}


export default App;
