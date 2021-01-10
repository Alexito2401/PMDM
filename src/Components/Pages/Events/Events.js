import React from 'react';
import { Chart } from 'primereact/chart';

const LineChartDemo = () => {
    const basicData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 5, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5'
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderColor: '#FFA726'
            }
        ]
    };

    const multiAxisData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            fill: false,
            borderColor: '#42A5F5',
            yAxisID: 'y-axis-1',
            data: [65, 59, 80, 81, 56, 55, 10]
        }, {
            label: 'Dataset 2',
            fill: false,
            borderColor: '#00bb7e',
            yAxisID: 'y-axis-2',
            data: [28, 48, 40, 19, 86, 27, 90]
        }]
    };

    const lineStylesData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#42A5F5'
            },
            {
                label: 'Second Dataset',
                data: [28, 48, 40, 19, 86, 27, 90],
                fill: false,
                borderDash: [5, 5],
                borderColor: '#66BB6A'
            },
            {
                label: 'Third Dataset',
                data: [12, 51, 62, 33, 21, 62, 45],
                fill: true,
                borderColor: '#FFA726',
                backgroundColor: 'rgba(255,167,38,0.2)'
            }
        ]
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
            hoverMode: 'index',
            stacked: false,
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
                        fontColor: '#495057'
                    },
                    gridLines: {
                        color: '#ebedef'
                    }
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    ticks: {
                        fontColor: '#495057'
                    },
                    gridLines: {
                        drawOnChartArea: false,
                        color: '#ebedef'
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

    const { basicOptions, multiAxisOptions } = getLightTheme();

    return (
        <div>
            <div className="card">
                <h5>Basic</h5>
                <Chart type="line" data={basicData} options={basicOptions} />
            </div>

            <div className="card">
                <h5>Multi Axis</h5>
                <Chart type="line" data={multiAxisData} options={multiAxisOptions} />
            </div>

            <div className="card">
                <h5>Line Styles</h5>
                <Chart type="line" data={lineStylesData} options={basicOptions} />
            </div>
        </div>
    )
}

export default LineChartDemo;