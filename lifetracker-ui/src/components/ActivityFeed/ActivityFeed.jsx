import * as React from "react"
import "./ActivityFeed.css"

//react imports
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

//component imports
import apiClient from "../../services/apiClient"
import SummaryStat from "../SummaryStat/SummaryStat"

//import for date formatting
import Moment from "moment"

export default function ActivityFeed(props) {


  //state variables
  const [error, setError] = useState(null)




  useEffect(() => {
    const fetchNutritionData = async () => {
      // props.setIsLoading(true)
      const {data, error} = await apiClient.getCalorieStatistics()
      if(data){
        console.log("data", data.nutrition)
        props.setNutritionData(data.nutrition)
      }
      if(error){
        setError(error)
      }
      // props.setIsLoading(false)   loading causes infinite refresh??
    }
  
    fetchNutritionData()
  }, [])
  
  console.log("props.nutritionData", props.nutritionData?.calories?.perCategory)




  
  return (
    <div className="activity-feed">
        <div className = "feed-header">
            <span className="feed-title-container">
                <h1 className ="feed-title">Activity Feed</h1>
                <button className ="exercise-btn">Add Exercise</button>
                <button className = "sleep-btn">Log Sleep</button>
                <Link className = "create-nutrition" to ="/nutrition/create"><button className ="nutrition-btn">Record Nutrition</button></Link>
            </span>
        </div>
        <h2 className = "per-category-title">Average Calories Per Category</h2>
        <div className = "per-category">
          {props.nutritionData?.calories?.perCategory.map((category, index) => 
            <SummaryStat key = {index} stat = {category.avgCaloriesPerCategory} label = "Calories" substat = {category.category}/>
          )}
        </div>
        <h2 className = "per-day-title">Total Calories Per Day</h2>
        <div className = "per-day">
        
          {props.nutritionData?.calories?.perDay.map((daily, index) => 
            <SummaryStat key= {index} stat = {daily.totalCaloriesPerDay} label = "Calories" substat = {Moment(new Date(daily.date)).format("MMMM Do, YYYY")}/>
          )}
        </div>

    </div>
  )
}