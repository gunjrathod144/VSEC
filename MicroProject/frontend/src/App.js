import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Login from "./Login";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import AddBooking from "./AddBooking";
import Bookings from "./Bookings";

import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/dashboard">Home</Link>
        <Link to="/add-booking">Book Flight</Link>
        <Link to="/bookings">My Bookings</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-booking" element={<AddBooking />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;