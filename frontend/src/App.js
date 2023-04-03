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

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
    // children: [
    //   {
    //     path: "/",
    //     element:<Home/>
    //   }
    // ]
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/login",
    element: <Login/>
  }
]);*/

function App() {
  return (
    <div className="App">
      <div className="container">
     <Router>
      <Navbar />
         <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/rooms" element={<Rooms/>} />
            <Route exact path="/rooms/:id" element={<Room/>} />
            <Route exact path="/contact" element={<Contact/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
         </Routes>
     </Router>
     </div>
    </div>
  );
}


export default App;
