import * as React from "react"
import "./LandingPage.css"

//image import
import fitnessLogo from '../fitness-tracker-logo.jpg'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero">
        <div className = "hero-img-container">
          <img src={fitnessLogo} alt="LifeTracker logo, two fitbits stacked on each other" className = "hero-img"/>
        </div>
        <div className = "cta">
          <h1 className = "cta-title">Life Tracker</h1>
          <h2 className = "cta-subheading"><em>Helping you take back control of your world</em></h2>
        </div>
        <div className = "feature-icons-container">
          <div className = "feature-icons">
            <span><i class="fa-solid fa-dumbbell fa-2xl"></i></span>
            <span><i class="fa-solid fa-carrot fa-2xl"></i></span>
            <span><i class="fa-solid fa-bed fa-2xl"></i></span>
            <span><i class="fa-solid fa-calendar fa-2xl"></i></span>
          </div>
        </div>
      </div>
    </div>
  )
}