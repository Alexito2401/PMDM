import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';

import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import ReportsService from './RepostsService';

const Reports = () => {
  const [usercount, setusercount] = useState(null);
  const [betcount, setbetcount] = useState(null);
  const reportsService = new ReportsService();
  useEffect(() => {
    reportsService.getCountUser().then(data => setusercount(data, console.log(data)));
  }, []);
  useEffect(() => {
    reportsService.getCountBet().then(data => setbetcount(data, console.log(data)));
  }, []);

  const basicData = {
    labels: ['Today'],
    datasets: [
      {
        label: 'Altas por día',
        backgroundColor: '#42A5F5',
        data: [usercount]
      },
      {
        label: 'Apuestas por dia',
        backgroundColor: '#FFA726',
        data: [betcount]
      },
    ],

  };

  const getLightTheme = () => {
    let basicOptions = {
      legend: {
        labels: {
          fontColor: '#495057'
        }
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }],
        yAxes: [{
          ticks: {
            fontColor: '#495057'
          }
        }]
      }
    };


    let multiAxisOptions = {
      responsive: true,
      tooltips: {
        mode: 'index',
        intersect: true
      },
      scales: {
        xAxes: [{
          ticks: {
            fontColor: '#495057'
          },
          gridLines: {
            color: '#ebedef'
          }
        }],
        yAxes: [{
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-1',
          ticks: {
            min: 0,
            max: 30,
            fontColor: '#495057'
          },
          gridLines: {
            color: '#ebedef'
          }
        },
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-2',
          gridLines: {
            drawOnChartArea: false,
            color: '#ebedef'
          },
          ticks: {
            min: 0,
            max: 100,
            fontColor: '#495057'
          }
        }]
      },
      legend: {
        labels: {
          fontColor: '#495057'
        }
      }
    };

    return {
      basicOptions,
      multiAxisOptions
    }
  }

  const { multiAxisOptions } = getLightTheme();

  return (
    <div className='reports'>
      <div className="card">
        <h5>Reports</h5>
        <Chart type="bar" data={basicData} options={multiAxisOptions} />
      </div>
    </div>
  )
}

export default Reports