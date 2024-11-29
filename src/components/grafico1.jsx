import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Graf() {
  const data = {
    labels: [
      '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', 
      '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
    ],
    datasets: [
      {
        label: 'Focos de Queimada',
        data: [
          20000, 25000, 15000, 18000, 40000, 45000, 38000, 65000, 45000, 50000, 20000, 15000, 40000, 
          10000, 10000, 20000, 30000, 25000, 30000, 30000, 15000, 30000, 35000, 30000, 40000, 20000, 45000
        ],
        borderColor: 'black',
        backgroundColor: 'black',
        tension: 0.3,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Focos de queimada na Amazônia',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Focos de Queimada',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default Graf;
