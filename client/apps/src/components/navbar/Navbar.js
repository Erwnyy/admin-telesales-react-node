import "./navbar.css"
import React, { useContext } from 'react'
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { user } = useContext(AuthContext);


  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">lamabooking</span>
          { user ? user.username : (<div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>)}
      </div>
    </div>
  )
}

export default Navbar