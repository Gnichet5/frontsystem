import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


function Graf() {
  const data = {
    labels: [
      '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
    ],
    datasets: [
      {
        label: 'Focos de Queimada',
        data: [
          580, 1210, 915, 587, 909, 1194, 1012, 1161, 1096, 754, 489, 347, 2444, 1159, 521, 602, 1440, 627, 840, 734, 350, 1111, 2277, 742, 315, 352, 3483
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
        text: 'Focos de queimada em São Paulo - AGOSTO',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 3500,
        title: {
          display: true,
          text: 'Focos de Queimada',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default Graf;