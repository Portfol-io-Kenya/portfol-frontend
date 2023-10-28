"use client"
import { ApexOptions } from "apexcharts";
import ApexChart from "./ApexChart";

interface Props extends ApexOptions {
    chartHeight?: number
}
  

const BarChart: React.FC<Props> = ({chartHeight}) => {
    const options = {
        chart: {
            id: 'portfol-bar-chart',
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '20%',
              borderRadius: 5,
            },
          },
          legend: {
            show: false,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              style: {
                colors: "#555",
                fontSize: '12px',
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: '#555',
                fontSize: '12px',
              },
            },
          },
          fill: {
              type: 'gradient',
              gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: ['#B287FF'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
                colorStops: []
              }
          },
          states: {
            normal: {
              filter: {
                type: 'none',
                value: 0,
              },
            },
            hover: {
              filter: {
                type: 'none',
                value: 0,
              },
            },
            active: {
              allowMultipleDataPointsSelection: false,
              filter: {
                type: 'none',
                value: 0,
              },
            },
          },
          tooltip: {
            style: {
              fontSize: '12px',
            },
            y: {
              formatter: function (val: any) {
                return val + ' portfols'
              },
            },
          },
          colors: ['#7B4FFF'],
          grid: {
            padding: {
              top: 10,
            },
            borderColor: '#d5d5d5',
            strokeDashArray: 4,
            yaxis: {
              lines: {
                show: true,
              },
            },
          },
    }

  
    const series = [
        {
          name: 'My Portfol',
          data: [50, 60, 70, 80, 60, 50, 70, 60],
        },
    ]
    return (
        <ApexChart
          type="bar"
          options={options}
          series={series}
          height={chartHeight}
        />
    );
  };
    
export default BarChart;