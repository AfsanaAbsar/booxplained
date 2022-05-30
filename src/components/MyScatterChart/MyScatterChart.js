import React from 'react';
import { CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyScatterChart = () => {
    const [chart, setChart] = useChart();
    return (
        <ScatterChart width={730} height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="visitor" />

            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="A school" data={chart} fill="#8884d8" />

        </ScatterChart>
    );
};

export default MyScatterChart;