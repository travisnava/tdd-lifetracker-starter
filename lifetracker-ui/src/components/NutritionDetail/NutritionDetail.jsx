import * as React from "react"
import "./NutritionDetail.css"


//component imports
import apiClient from "../../services/apiClient"
import NutritionCard from "../NutritionCard/NutritionCard"
import Loading from "components/Loading/Loading"
import notFound from "components/NotFound/NotFound"


//react imports
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function NutritionDetail(props) {
  const [currentNutrition, setCurrentNutrition] = useState(null)
  const ID = useParams();
  let nutritionId = ID.nutritionId
  let validId = nutritionId > 0;
  console.log("nutritionId", nutritionId)
  console.log(currentNutrition)
  

  useEffect(() => {
    const fetchNutrition = async () => {
      props.setIsLoading(true)
      const {data, error} = await apiClient.fetchNutritionById(nutritionId)
      if(data){
        setCurrentNutrition(data.nutrition)
      }
      if(error){
        setError(error)
      }
      props.setIsLoading(false)
    }
  
    fetchNutrition()
  }, [])


  // checking to see if valid id exists in nutrition array


  return (
    <div className="nutrition-detail">
        {currentNutrition  ? (<NutritionCard name = {currentNutrition.name} imageURL = {currentNutrition.image_url}
         createdAt = {currentNutrition.created_at} calories = {currentNutrition.calories} category = {currentNutrition.category} 
         quantity = {currentNutrition.quantity}/>) 
         : validId ? (<notFound/>) : (<Loading/>)}
    </div>
  )
}