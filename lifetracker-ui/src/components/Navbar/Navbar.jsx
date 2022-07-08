import * as React from "react"
import "./Navbar.css"
import codepathLogo from '../codepath.jpeg'

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
            <NavLinks user = {props.user} setUser = {props.setUser} handleOnLogout = {props.handleOnLogout}/>
        </div>
      </div>
    </nav>
  )
}







