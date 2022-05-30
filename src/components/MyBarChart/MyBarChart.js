import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';





const MyBarChart = () => {
    const [chart, setChart] = useChart();

    return (

        <BarChart width={730} height={250} data={chart}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="visitor" fill="#8884d8" />

        </BarChart>

    );
};


export default MyBarChart;
