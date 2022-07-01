import * as React from "react"
import "./NutritionForm.css"




//react imports
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function NutritionForm() {




  //use state variables
  const navigate = useNavigate
  const [nutritionForm, setNutritionForm] = useState({name: "", category: "", calories: 0, imageURL: ""})





  function handleOnInputChange (evt) {

    // add error handling error or in submit handler


    setNutritionForm((form) => ({ ...form, [evt.target.name]: evt.target.value }))
    
}

async function  handleOnSubmitNutritionForm(){
            
    // try {
    //   const response = await axios.post("http://localhost:3001/auth/register", registerForm)
    //   if (response.data) {
    //     console.log("response data is:", response.data)
    //   } else {
    //     setError("Error registering your account")
    //   }
    // } catch (error) {
    //   console.log(error)
    // } 
  


  navigate("/nutrition")
}




  return (
    <div className="nutrition-form">
        <div className = "record-nutrition-title-container">
            <h1 className = "record-nutrition-title">Record Nutrition</h1>
        </div>
        <div className ="form-input-container">
            <p className ="nutrition-name-label">Name</p>
            <input name = "name" className ="form-input" type="text" value = {nutritionForm.name} onChange = {handleOnInputChange} placeholder ="Nutrition name"/>
        </div>
        <div className ="form-input-container">
            <p className ="category-label">Category</p>
            <input name = "category" className ="form-input" type="text" value = {nutritionForm.category} onChange = {handleOnInputChange} placeholder ="Nutrition category"/>
        </div>
        <div className ="form-input-container">
            <span className ="quantity-container"><p className ="quantity-label">Quantity</p><input name = "quantity" className ="form-input" type="number" value = {nutritionForm.quantity} onChange = {handleOnInputChange} placeholder ="1"/></span>
            <span className ="calories-container"><p className ="calorie-label">Calories</p><input name = "calories" className ="form-input" type="number" value = {nutritionForm.calories} onChange = {handleOnInputChange} placeholder ="1"/></span>
        </div>
        <div className ="form-input-container">
            <p className ="image-label">Image URL</p>
            <input name = "imageURL" className ="form-input" type="text" value = {nutritionForm.imageURL} onChange = {handleOnInputChange} placeholder ="http://www.food-image.com/1"/>
        </div>
        <button className = "submit-nutrition" onClick={handleOnSubmitNutritionForm}>Save</button>
    </div>
  )
}