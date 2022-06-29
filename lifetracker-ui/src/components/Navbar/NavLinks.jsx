import * as React from "react"
import "./Navbar.css"

//react imports
import {Link} from 'react-router-dom';

export default function NavLinks() {



  return (
        <div className="nav-links-container">
           <Link to = "/activity" className = "link"><NavLink navLink = "Activity" /></Link>
           <Link to = "/exercise" className = "link"><NavLink navLink = "Exercise" /></Link>
           <Link to = "/nutrition" className = "link"><NavLink navLink = "Nutrition" /></Link>
           <Link to = "/sleep" className = "link"><NavLink navLink = "Sleep" /></Link>
           <Link to = "/login" className = "link"><NavLink navLink = "Login" /></Link>
           <Link to = "/register" className = "link"><NavLink navLink = "Sign Up" /></Link>
        </div>

  )
}


export function NavLink({navLink}) {
  return (
        <span className = "nav-link" label= {navLink}>{navLink}</span>
  )
}



