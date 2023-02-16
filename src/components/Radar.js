import { RadarController } from 'chart.js'
import React from 'react'
import { Radar } from 'react-chartjs-2'
import { useState } from 'react'


const options = {
  scales: {
    r: {
      type: 'radialLinear',
      grid: {
        color: 'rgba(0, 0, 0, 1)'
      }
    }
  }
};
export const RadarChart=({data})=> {
  const [chartData, setChartData] = useState(data)
  return (
    <div className='chart-container'>
       
        <Radar data={chartData} options={ options }
            />

    </div>
  )
}
