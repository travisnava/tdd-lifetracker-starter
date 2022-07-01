import * as React from "react"
import "./Navbar.css"

//react imports
import {Link} from 'react-router-dom';

export default function NavLinks(props) {






  return (

        <div className="nav-links-container">
          <div className = "resource-navlinks">
           <Link to = "/activity" className = "link"><NavLink navLink = "Activity" /></Link>
           <Link to = "/exercise" className = "link"><NavLink navLink = "Exercise" /></Link>
           <Link to = "/nutrition" className = "link"><NavLink navLink = "Nutrition" /></Link>
           <Link to = "/sleep" className = "link"><NavLink navLink = "Sleep" /></Link>
           </div>
          {/* conditional rendering to check conditions for sign up/register buttons or logout based on if user is signed in */}
          {props.user.email ?  <div className ="login-navlinks"><Link to = "/" className = "link2"><NavLink navLink = "Logout" onClick = {props.handleOnLogout}/></Link></div> :
            <div className ="login-navlinks">
              <Link to = "/login" className = "link2"> <NavLink navLink = "Login" /></Link>
              <Link to = "/register" className = "link2"><NavLink navLink = "Register" /></Link>
            </div>}
          </div>

  )
}


export function NavLink({navLink, onClick}) {
  return (
        <span className = "nav-link" label= {navLink} onClick={onClick}>{navLink}</span>
  )
}



