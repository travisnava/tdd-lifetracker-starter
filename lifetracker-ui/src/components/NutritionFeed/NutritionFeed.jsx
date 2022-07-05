import * as React from "react"
import "./NutritionFeed.css"


//component imports
import NutritionCard from "../NutritionCard/NutritionCard"
import apiClient from "../../services/apiClient"

//react imports
import { useState, useEffect } from "react"

export default function NutritionFeed(props) {




  useEffect(() => {
    const fetchNutritions = async () => {
      // props.setIsLoading(true)
      const {data, error} = await apiClient.listNutritionForUser()
      if(data){
        props.setNutritions(data)
      }
      if(error){
        setError(error)
      }
      // props.setIsLoading(false)
    }
  
    fetchNutritions()
  }, [])
  

  return (
    <div className="nutrition-feed">
      {console.log("props.nutritions", props.nutritions.nutritions)}
      {props.nutritions.length != 0 ? props.nutritions.nutritions.map((nutrition => 
      <NutritionCard key = {nutrition.name} name = {nutrition.name} imageURL = {nutrition.image_url} createdAt = {nutrition.created_at} category = {nutrition.category} quantity = {nutrition.quantity} calories = {nutrition.calories}/>)) : <h1 className ="empty-message">Nothing here yet</h1>}
      {/* pass in correct props to nutritioncard in the above map later */}
    </div>
  )
}