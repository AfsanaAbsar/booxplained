import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';





const MyBarChart = () => {
    const [chart, setChart] = useChart();

    return (

        <BarChart width={600} height={250} data={chart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="visitor" fill="#F9557E" />
            <Bar dataKey="reviews" fill="#08085C" />

        </BarChart>

    );
};


export default MyBarChart;
