import React from 'react';
import './WeeklyChart.css';

const WeeklyChart = () => {
  const chartData = [
    { day: 'Mon', value: 30 },
    { day: 'Tue', value: 60 },
    { day: 'Wed', value: 25 },
    { day: 'Thu', value: 75 },
    { day: 'Fri', value: 50 },
    { day: 'Sat', value: 45 },
    { day: 'Sun', value: 55 },
  ];

  return (
    <div className="weekly-chart-container">
      <h2 className="chart-title">Weekly Report Chart</h2>
      <p className="chart-subtitle">
        This chart represents the weekly report of the patient. The height of each bar indicates the percentage of health improvement over the week.
      </p>
      <div className="chart">
        {chartData.map((item, index) => (
          <div className="bar-group" key={index}>
            <div className="bar-background">
              <div className="bar-fill" style={{ height:` ${item.value}% `}}></div>
            </div>
            <div className="bar-label">{item.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyChart;