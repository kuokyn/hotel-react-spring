import './style.css';
import {
  Routes,
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Rooms from "./pages/Rooms";
import Room from "./pages/Room";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import User from "./pages/User";
import UsersRoutes from './utils/UsersRoutes';
import AdminRoutes from './utils/AdminRoutes';
import Error404 from './pages/Error404';
function App() {
  
  return (
    <div className="App">
      <div className="container">
     <Router>
      <Navbar />
         <Routes>
            <Route element={<AdminRoutes/>}>
              {/* <Route exact path="/profile" element={<Profile/>} /> */}
              <Route exact path="/rooms/:id" element={<Room/>} />
              <Route exact path="/users" element={<Users/>} />
              <Route exact path="/users/:id" element={<User/>} />
            </Route>
            <Route element={<UsersRoutes/>}>
              <Route exact path="/profile" element={<Profile/>} />
            </Route>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/rooms" element={<Rooms/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route path="*" element={<Error404/>} status={404}/>
         </Routes>
     </Router>
     </div>
    </div>
  );
}


export default App;
