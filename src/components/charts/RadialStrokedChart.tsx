"use client"
import { ApexOptions } from "apexcharts";
import ApexChart from "./ApexChart";
  

const RadialStrokedChart: React.FC<ApexOptions> = () => {
    const options = {
        chart: {
            id: 'portfol-radial-bar',
        },
        plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              dataLabels: {
                show: false,
                name: {
                    fontSize: '16px',
                    color: undefined,
                    offsetY: 120
                },
                value: {
                  offsetY: 76,
                  fontSize: '22px',
                  color: undefined,
                  formatter: function (val: any) {
                    return val + "%";
                  }
                }
              }
            }
          },
          fill: {
            colors: ['#ff7003'],
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#16a34a'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            }
        },
          stroke: {
            dashArray: 4
          },
          labels: ['Median Ratio'],
    }
  
    const series = [75];
  
    return (
        <ApexChart
          type="radialBar"
          options={options}
          series={series}
        //   height={350}
          offsetY={-10}
        />
    );
  };
    
export default RadialStrokedChart;