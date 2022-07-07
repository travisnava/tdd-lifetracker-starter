import * as React from "react"
import "./SummaryStat.css"

export default function SummaryStat(props) {
  return (
    <div className="summary-stat">
      <div className = "main-statistic">
        <span className = "primary-statistic"></span>
        <span className = "stat-label"></span>
      </div>
      <span className = "secondary-statistic"></span>
    </div>
  )
}