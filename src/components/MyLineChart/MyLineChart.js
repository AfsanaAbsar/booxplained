import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyLineChart = () => {

    const [chart, setChart] = useChart();
    return (
        <LineChart width={600} height={300} data={chart} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="visitor" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default MyLineChart;