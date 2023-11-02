"use client"
import { ApexOptions } from "apexcharts";
import ApexChart from "./ApexChart";

interface Props extends ApexOptions {
    showLegend?: boolean
}

const DonutChart: React.FC<Props> = ({showLegend}) => {
    const options = {
        chart: {
            id: 'portfol-donut-chart',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: showLegend,
            position: 'right',
            offsetY: 0,
        },
        title: {
            // text: 'chartTitle',
            align: 'left',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize:  '14px',
                fontWeight:  'normal',
                color:  '#263238'
            },
        },
        stroke: {
            lineCap: 'round'
        },
        labels: ['Profile Views', 'Completed', 'Engagements'],
    }
  
    const series = [3, 2, 1,]
    return (
        <ApexChart
          type="donut"
          options={options}
          series={series}
          height={200}
        />
    );
  };
    
export default DonutChart;