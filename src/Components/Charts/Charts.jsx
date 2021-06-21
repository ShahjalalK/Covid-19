import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { FatchDaily } from '../Api/Index'
import { Line } from 'react-chartjs-2';

const Charts = () => {
    const [dailyData, setDailyData] = useState([])
    useEffect( () => {
        const FatchAPI = async () => {
            setDailyData(await FatchDaily())
        }
        FatchAPI();
    }, [])
    console.log(dailyData)
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

  const lineChart = (
      dailyData.length  ? 
      <Line 
        data={{
            labels: dailyData.map(({date}) => date ),
            datasets:[
                {
                    data: dailyData.map(({confirmed}) => confirmed ),
                    label: 'Infected',
                    borderColor: '#3333ff',
                    fill: true, 
                },                
                {
                    data: dailyData.map(({deaths}) => deaths ),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,  
                }
            ]
    }}
    options={options}
      /> : null
  )
    return (
        <>
          {lineChart}
        </>
    )
}

export default Charts
