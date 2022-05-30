import React from 'react';
import { CartesianGrid, Legend, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from 'recharts';
import useChart from '../../hooks/useChart';

const MyScatterChart = () => {
    const [chart, setChart] = useChart();
    return (
        <ScatterChart width={730} height={250}
            margin={{ top: 20, right: 20, bottom: 10, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis dataKey="visitor" />
            <ZAxis dataKey="reviews" />



            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Visitors and Reviews" data={chart} fill="#08085C" />


        </ScatterChart>
    );
};

export default MyScatterChart;