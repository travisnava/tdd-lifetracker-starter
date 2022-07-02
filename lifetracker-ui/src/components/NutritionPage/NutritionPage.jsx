import * as React from "react"
import "./NutritionPage.css"


//react imports
import { useEffect } from "react"

//component imports
import NutritionOverview from "../NutritionOverview/NutritionOverview"
import AccessForbidden from "../AccessForbidden/AccessForbidden"




export default function NutritionPage(props) {






  useEffect(() => {
    const fetchNutritions = async () => {
      props.setIsLoading(true)
      const {data, error} = await apiClient.listNutritionForUser()
      if(data){
        console.log("nutritions", props.nutritions)
        props.setNutritions(data)
      }
      if(error){
        setError(error)
      }
      props.setIsLoading(false)
    }
  
    fetchNutritions()
  }, [])



  
  const checkAccess = () => {
    if(!props.user?.email){
      return <AccessForbidden/>
    }
  }








  return (

    <div className="nutrition-page">
      {!props.user?.email ? checkAccess() :
        <div>
        <div className = "nutrition-title-container">
          <h1 className = "nutrition-title"><em>Nutrition</em></h1>
        </div>
        <div className = "nutrition-feed">
        </div>
        <NutritionOverview isLoading = {props.isLoading} nutritions = {props.nutritions}/>
        </div>}
    </div>
  )
}