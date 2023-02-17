import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from 'react';
import api from '../../../ٖUtils/api'
import { useParams } from 'react-router-dom';
import moment from 'moment';
import Style from './style';

export default function Chart() {
    const [chartData, setChartData] = useState([])
    const { id } = useParams()

    useEffect(() => { getChartApi() }, [])
    async function getChartApi() {
        const response = await api.get(`assets/${id}/history`, { params: { interval: "m1" } })
        setChartData(response.data.data)
    }

    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

    const options = {
        responsive: true,
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
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                count:25,
            },
            y: {
                count: "7",
                position: 'right',
                ticks: {
                    mirror: true,
                    padding: -10,
                    labelOffset: -10,
                    maxTicksLimit: 10
                },
            },

            // r: {
            //     max: 100,
            //     min: -100,
            //     count: 20,
            //     ticks: {
            //         stepSize: 40
            //     }
            // }
        }
    }

    function render(num) {
        const time = (moment(num).format("hA"))
        return (time)
    }

    // const labels = chartData.map(item => render(item.time))
    // console.log(time)


    // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels: chartData.map(item => render(item.time)),
        datasets: [
            {
                fill: true,
                label: '',
                data: chartData.map(item => item.priceUsd),
                // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                // tension: 0,
            },
        ],
    };

    return (
        <Style>
            <Line options={options} data={data}/>
        </Style>
    )
}
