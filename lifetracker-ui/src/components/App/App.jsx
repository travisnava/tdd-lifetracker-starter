import * as React from "react"
import "./App.css"




//react imports
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

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
import apiClient from "../../services/apiClient"





export default function App() {



//state variables
const [user, setUser] = useState({})
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)
const [nutritions, setNutritions] = useState([])
const [nutritionData, setNutritionData] = useState({})









useEffect(() => {
  const fetchUser = async () => {
    const {data, error} = await apiClient.fetchUserFromToken()
    if (data) setUser (data.user)
    if (error) setError(error)
  }


  const token = localStorage.getItem("lifetracker_token")
  if(token) {
    apiClient.setToken(token)
    fetchUser()
  }
}, [])



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
              <Route path = "/activity" element = {<ActivityPage user = {user} isLoading = {isLoading} setIsLoading = {setIsLoading} nutritionData = {nutritionData} setNutritionData = {setNutritionData}/>} />
              <Route path = "/nutrition" element = {<NutritionPage  user = {user} isLoading = {isLoading} nutritions = {nutritions} setNutritions = {setNutritions}/>} />
              <Route path = "/nutrition/create" element = {<NutritionNew nutritions = {nutritions} setNutritions = {setNutritions}/>} />
              <Route path = "/nutrition/id/:nutritionId" element = {<NutritionDetail nutritions = {nutritions} isLoading = {isLoading} setIsLoading = {setIsLoading}/>} />


              <Route path = "*" element = {<NotFound />}/> 
            </Routes>

          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
