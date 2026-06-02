import { NavLink } from "react-router-dom";
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top px-3 glass-navbar">
      <NavLink className="navbar-brand" to="/">Safar</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/destinations">Destinations</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/bookings">Bookings</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
          <li className="nav-item"><NavLink className="nav-link" to="/admin/login">Admin</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;