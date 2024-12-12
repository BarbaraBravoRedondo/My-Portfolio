import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import '../styles/BarChart.scss'


ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MySQL', 'MongoDb', 'Figma'],
    datasets: [
      {
        data: [90, 80, 80, 80, 70, 60, 60, 60],
        backgroundColor: [
          'rgb(206, 225, 70)', // HTML
          'rgb(145, 170, 56)', // CSS
          'rgb(75, 192, 192)', // JavaScript
          'rgb(255, 99, 132)', // React
          'rgb(54, 162, 235)', // Node.js
          'rgb(255, 206, 86)', // MySQL
          'rgb(153, 102, 255)', // MongoDB
          'rgb(255, 159, 64)', // Figma
        ],
        borderColor: 'rgb(145, 170, 56)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Oculta la leyenda predeterminada
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}`; // Muestra solo el nombre
          },
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
      duration: 2500,
      delay: (context) => context.dataIndex * 500,
    },
  };

  return (
    <div className="doughnut-chart-wrapper">
      <div className="doughnut-chart-container">
        <Doughnut data={data} options={options} />
      </div>
      <div className="doughnut-chart-info">
        {data.labels.map((label, index) => (
          <div key={index} className="info-item" title={label}>
            <div
              className="color-box"
              style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
            />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
