import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

export default function Chart({ price, time, change, timeSheet }) {

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
    const showTime = time.map(time => moment(time).format('MMMM DD, YYYY - h:mm a'))

    const options = {
        responsive: true,
        layout: {
            padding: {
                top: 20,
                right: 10,
            },
        },

        elements: {
            point: {
                radius: 0,
                pointStyle: "cross",
            }
        },

        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context) {
                        return context.parsed.y.toFixed(2);
                    }
                }
            }
        },

        scales: {
            x: {
                border: {
                    display: false,
                },

                grid: {
                    display: false,
                },

                ticks: {
                    callback: function (index) {
                        return timeSheet[index];
                    },
                    maxRotation: 45,
                    minRotation: 0,
                    autoSkipPadding: 2,
                    maxTicksLimit: 24,
                    labelOffset: 10,
                    font: {
                    },
                },
            },

            y: {
                position: 'right',
                border: {
                    display: false,
                },

                ticks: {
                    callback: function (value) {
                        return value.toFixed(2);
                    },
                    mirror: true,
                    padding: -10,
                    labelOffset: -8,
                    maxTicksLimit: 12,
                    z: 100,
                },
            }
        },
    }

    const data = {
        labels: showTime,
        datasets: [
            {
                label: 'test',
                fill: true,
                data: price,
                borderColor: change < 0 ? '#F43E31' : '#5AEDAA',
                backgroundColor: change < 0 ? 'rgba(224, 67, 54, 0.2)' : 'rgba(90, 237, 170, 0.2)',
            },
        ],
    };

    return (
        <Line options={options} data={data} style={{ width: '760px', height: '370px' }} />
    )
}
