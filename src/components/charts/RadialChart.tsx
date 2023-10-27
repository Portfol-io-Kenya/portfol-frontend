"use client"
import { ApexOptions } from "apexcharts";
import ApexChart from "./ApexChart";
  

const RadialChart: React.FC<ApexOptions> = () => {
    const options = {
        chart: {
            id: 'portfol-radial-bar',
        },
        plotOptions: {
            radialBar: {
              hollow: {
                margin: 0,
                size: '10%',
                background: '#fff',
                position: 'front',
                dropShadow: {
                  enabled: true,
                  top: 3,
                  left: 0,
                  blur: 4,
                  opacity: 0.24
                }
              },
              track: {
                  background: '#fff',
                  strokeWidth: '90%',
                  margin: 60, // margin is in pixels
                  dropShadow: {
                    enabled: true,
                    top: -3,
                    left: 0,
                    blur: 15,
                    opacity: 0.13
                  }
              },
              dataLabels: {
                  name: {
                    show: false,
                    fontWeight: '700',
                  },
                  value: {
                    color: '#111',
                    fontSize: '24px',
                    fontWeight: '700',
                    offsetY: 12,
                    show: true,
                    formatter: function (val: any) {
                      return val + ''
                    },
                  },
                },
            },
        },
        fill: {
            colors: ['#9C27B0'],
            type: 'gradient',
            gradient: {
              shade: 'dark',
              type: 'horizontal',
              shadeIntensity: 0.5,
              gradientToColors: ['#7B4FFF'],
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
            }
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Percent'],
    }
  
    const series = [75];
  
    return (
        <ApexChart
          type="radialBar"
          options={options}
          series={series}
          height={350}
        />
    );
  };
    
export default RadialChart;