import * as React from "react"
import "./SummaryStat.css"

export default function SummaryStat(props) {
  return (
    <div className="summary-stat">
      <h2 className = "stat-label">{props.label}</h2>
      <h3 className = "primary-statistic">{props.stat}</h3>
      <h2 className = "secondary-statistic">{props.substat}</h2>
    </div>
  )
}