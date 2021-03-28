import ReactApexChart from 'react-apexcharts'

const LineChart = (props) => {
    const state = {
      series: [{
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    };
    return (
      <div id="chart" className="col-6 media bg-white rounded-4 hover-shadow-1 mb-9 shadow-8">
        <ReactApexChart options={state.options} series={state.series} type="line" width="550px"/>
      </div>
    );
};

export default LineChart;
