import Category from "./Category"
import { LineChart, PieChart } from "./Charts"
import React from 'react'

const Statistics = (props) => {

  const categoryClassNames = {
    category:"media bg-white rounded-4 pl-8 pt-9 pb-9 pr-7 hover-shadow-1 mb-9 shadow-8",
    icon:"text-white circle-56 font-size-6 mr-7",
    text:"font-size-8 font-weight-semibold text-black-2 line-height-reset font-weight-bold mb-1",
    subtext:"font-size-4 font-weight-normal text-gray mb-0"
  }
  return (
    <div>
      <div className="row mb-7">
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
          <Category
            classNames = {categoryClassNames}
            icon = "fas fa-briefcase"
            text = "20"
            subText = "Posted Jobs"
            color = "bg-coral"
          />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
          <Category
            classNames = {categoryClassNames}
            icon = "fas fa-user"
            text = "200"
            subText = "Total applicants"
            color = "bg-blue"
          />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
          <Category
            classNames = {categoryClassNames}
            icon = "fas fa-eye"
            text = "1200"
            subText = "Job Views"
            color = "bg-red"
          />
        </div>
        <div className="col-xxl-3 col-xl-4 col-lg-6 col-sm-6">
          <Category
            classNames = {categoryClassNames}
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
