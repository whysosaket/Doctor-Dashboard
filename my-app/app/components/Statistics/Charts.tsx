"use client";
import React, { useEffect, useState, useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["", "", "", "", ""];

const data = {
  labels,
  datasets: [
    {
      data: [65, 50, 81, 56, 90],
      borderColor: 'rgb(255,255,255)',
    },
  ],
};

const Charts = () => {

  const options = {
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
    },
    lineTension: 0.45,
    pointRadius: 0,
    borderWidth: 2,
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
    
  };

  return (
    <>
      <div className='m-2'></div>
      <div className='bg-transparent rounded-3xl p-4 text-gray-700'>
      <Line options={options} data={data} />
      </div>
    </>
  );
};

export default Charts;