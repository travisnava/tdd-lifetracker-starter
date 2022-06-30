import * as React from "react"
import "./App.css"


//react imports
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

//component imports
import Navbar from "../Navbar/Navbar"
import LandingPage from "../LandingPage/LandingPage"
import LoginPage from "../LoginPage/LoginPage"
import RegistrationPage from "../RegistrationPage/RegistrationPage"
import NotFound from "../NotFound/NotFound"
import ActivityPage from "../ActivityPage/ActivityPage"
import NutritionPage from "../NutritionPage/NutritionPage"
import NutritionNew from "../NutritionNew/NutritionNew"
import NutritionDetail from "../NutritionDetail/NutritionDetail"





export default function App() {



//use state variables
const [activeUser, setActiveUser] = useState(false)
const [isLoading, setIsLoading] = useState(false)
const [nutritions, setNutritions] = useState([])










  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar activeUser = {activeUser} />
            <Routes>
              <Route path = "/" element = {<LandingPage/>} />
              <Route path = "/login" element = {<LoginPage activeUser = {activeUser} setActiveUser = {setActiveUser}/>} />
              <Route path = "/register" element = {<RegistrationPage/>} />
              <Route path = "/activity" element = {<ActivityPage/>} />
              <Route path = "/nutrition" element = {<NutritionPage isLoading = {isLoading} nutritions = {nutritions}/>} />
              <Route path = "/nutrition/create" element = {<NutritionNew/>} />
              <Route path = "/nutrition/id/:nutritionId" element = {<NutritionDetail/>} />


              <Route path = "*" element = {<NotFound />}/> 
            </Routes>

          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
