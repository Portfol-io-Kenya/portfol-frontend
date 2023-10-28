"use client"
import { ApexOptions } from "apexcharts";
import ApexChart from "./ApexChart";
  

const LineChart: React.FC<ApexOptions> = () => {
    const options = {
        chart: {
            id: 'portfol-line-chart',
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            },
            sparkline: {
                enabled: false
            }
        },
        colors: ['green', 'orange'],
        fill: {
            type: 'gradient',
            gradient: {
              opacityFrom: 0.2,
              opacityTo: 0,
            }
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        // grid: {
        //     borderColor: '#e7e7e7',
        //     row: {
        //         colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        //         opacity: 0.5
        //     },
        // },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sunday'],
        },
        yaxis: {
            min: 10,
            max: 50,
            forceNiceScale: true
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            floating: true,
            offsetY: -25,
            offsetX: -5
        }
    }
  
    const series = [
        {
            name: "Previous Week",
            data: [29, 45, 25, 36, 47, 44]
        },
        {
            name: "Current Week",
            data: [32, 35, 40, 25, 30, 20]
        }
    ];
  
    return (
        <ApexChart
          type="area"
          options={options}
          series={series}
          height={230}
        />
    );
  };
    
export default LineChart;