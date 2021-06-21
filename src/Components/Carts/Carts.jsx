import React from 'react'
import { Line } from 'react-chartjs-2';
import merge from 'lodash.merge';

const Carts = () => {
    const rand = 5000
   
    const data = {
            
        labels: [rand, 'Green', 'Yellow', 'black', 'orange'],
        datasets: [
            {
                type: 'line',
              label: 'A dataset',
              data: [
                rand, 2000, 1000, 6000, 80101
              ],
              fill: true,
              backgroundColor: 'orange',  
              borderColor: '#3333ff', 
              backgroundColor: 'rgba(255, 0, 0, 0.5)'        
            },
            
                                  
          ],
          
      };
   
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

    
   
    return (
        <div className="container mb-5"> 
            <Line 
                data={data} options={options}
            />
        </div>
    )
}

export default Carts
