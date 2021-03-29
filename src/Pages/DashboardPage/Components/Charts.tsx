import ReactApexChart from 'react-apexcharts'
import React, { useRef } from 'react'
import useContainerDimensions from '../../../shared/hooks/useContainerDimensions'

export const LineChart = (props) => {
    const state = {
      series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          type: 'line',
          redrawOnParentResize: true,
          zoom: {
            enabled: false
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Monthly clicks',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'],
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    };
    const componentRef = useRef(null)
    const { width, height } = useContainerDimensions(componentRef)
    return (
      <div className="col-6">
        <div ref={componentRef} className = "media bg-white rounded-4 hover-shadow-1 pb-6 pt-9 pl-5 pr-5 shadow-8 h-100">
          <ReactApexChart options={state.options} series={state.series} type="line" width = {width * 0.95} height = {height * 0.90}/>
        </div>
      </div>
    );
};

export const PieChart = (props) => {
    const state = {
      series: [44, 55, 13, 43, 22],
      options: {
        chart: {
          type: 'pie',
        },
        title: {
          text: 'Applications by country',
          align: 'left'
        },
        labels: ['Croatia', 'USA', 'UK', 'France', 'Italy'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
    };
    const componentRef = useRef(null)
    const { width, height } = useContainerDimensions(componentRef)
    return (
      <div className="col-6">
        <div ref={componentRef} className = "media bg-white rounded-4 hover-shadow-1 pb-6 pt-9 shadow-8 h-100">
          <ReactApexChart options={state.options} series={state.series} type="pie" width = {width * 0.95} height = {height * 0.90}/>
        </div>
      </div>
    );
};
