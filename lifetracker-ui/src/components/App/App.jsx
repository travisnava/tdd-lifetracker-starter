import * as React from "react"
import "./App.css"


//react imports
import { BrowserRouter, Routes, Route } from "react-router-dom"

//component imports
import Navbar from "../Navbar/Navbar"
import LandingPage from "../LandingPage/LandingPage"
import LoginPage from "../LoginPage/LoginPage"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import NotFound from "../NotFound/NotFound"



export default function App() {
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar />
            <Routes>
              <Route path = "/" element = {<LandingPage/>} />
              <Route path = "/login" element = {<LoginPage/>} />
              <Route path = "/register" element = {<RegistrationPage/>} />

              {/* implement routes for 
              /activity and /nutrtion/* here */}

              <Route path = "*" element = {<NotFound />}/> 
            </Routes>

          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
