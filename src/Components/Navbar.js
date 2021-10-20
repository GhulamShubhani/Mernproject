import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "../App.css";
import { NavLink} from "react-router-dom";
import logo from "../images/logo2.jpg";
// <img src={logo} alt="logo" /> 
const Navbar =()=>{
  return (
   <>
    <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">
        
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about">About US</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signup">signup</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/signin">signin</NavLink>
                </li>
                <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                    </NavLink>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <NavLink className="dropdown-item" to="/forgetpasdsdweeords">Forget</NavLink>
                        <NavLink className="dropdown-item" to="/update">update</NavLink>
                        <NavLink className="dropdown-item" to="/login">Login</NavLink>
                        <NavLink className="dropdown-item" to="/login1">Login1</NavLink>
                    </div>
                </li>
      </ul>
     
    </div>
  </div>
</nav>
   
    
   </>
  )
}

export default Navbar