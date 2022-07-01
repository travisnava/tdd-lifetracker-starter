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

const [user, setUser] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [nutritions, setNutritions] = useState([])




const handleOnLogout = async () => {
  await apiClient.logoutUser()
  setUser({})
  console.log("Logged out")
}





  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar user = {user} setUser = {setUser} handleOnLogout = {handleOnLogout}/>
            <Routes>
              <Route path = "/" element = {<LandingPage/>} />
              <Route path = "/login" element = {<LoginPage user = {user} setUser = {setUser}/>} />
              <Route path = "/register" element = {<RegistrationPage user = {user} setUser = {setUser}/>} />
              <Route path = "/activity" element = {<ActivityPage user = {user}/>} />
              <Route path = "/nutrition" element = {<NutritionPage  user = {user} isLoading = {isLoading} nutritions = {nutritions}/>} />
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
