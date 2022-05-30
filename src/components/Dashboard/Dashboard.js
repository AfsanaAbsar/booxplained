import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

import MyScatterChart from '../MyScatterChart/MyScatterChart';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div>
            <MyLineChart></MyLineChart>
            <MyBarChart></MyBarChart>

            <MyScatterChart></MyScatterChart>
        </div>
    );
};

export default Dashboard;