import React from 'react';
import MyBarChart from '../MyBarChart/MyBarChart';
import MyLineChart from '../MyLineChart/MyLineChart';

import MyScatterChart from '../MyScatterChart/MyScatterChart';
import './Dashboard.css'
const Dashboard = () => {
    return (
        <div >
            <div className='dashboard'>
                <h2>A Line Chart of visitors and reviews in our site</h2>
                <MyLineChart></MyLineChart>
            </div>

            <div className='dashboard'>
                <MyBarChart></MyBarChart>
                <h2>A Bar Chart of visitors and reviews in our site</h2>
            </div>
            <div className='dashboard'>
                <h2>A Line Chart of visitors and reviews in our site</h2>
                <MyScatterChart></MyScatterChart>
            </div>
        </div>
    );
};

export default Dashboard;