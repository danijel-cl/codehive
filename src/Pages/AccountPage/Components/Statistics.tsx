import Category from "./Category"
import { LineChart, PieChart } from "./Charts"
import React from 'react'

const Statistics = (props) => {
  return (
    <div>
      <div className="row mb-7">
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
          <Category
            icon = "fas fa-briefcase"
            text = "5"
            subText = "Active Challanges"
            color = "bg-coral"
          />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
          <Category
            icon = "fas fa-user"
            text = "200"
            subText = "Total applicants"
            color = "bg-blue"
          />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
          <Category
            icon = "fas fa-eye"
            text = "1200"
            subText = "Job Views"
            color = "bg-red"
          />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
          <Category
            icon = "fas fa-mouse-pointer"
            text = "18.6%"
            subText = "Applied Rate"
            color = "bg-green"
          />
        </div>
      </div>
      <div className="row" style={{height:"40vh"}}>
        <LineChart />
        <PieChart />
      </div>
    </div>
  )
}

export default Statistics;
