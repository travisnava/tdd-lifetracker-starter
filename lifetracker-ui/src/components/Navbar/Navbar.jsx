import * as React from "react"
import "./Navbar.css"
import codepathLogo from '../codepath_icon.webp'

//react imports
import {Link} from 'react-router-dom';

//component imports
import NavLinks from "./NavLinks";

export default function Navbar(props) {



  return (
    <nav className="navbar">
      <div className = "navbar-container">
        <div className = "logo-container">
            <Link to = "/">
                <img className = "logo" src={codepathLogo} alt = "Logo for CodePath"/>
            </Link>
        </div>
        <div className="nav-links">
            <NavLinks/>
        </div>
      </div>
    </nav>
  )
}







