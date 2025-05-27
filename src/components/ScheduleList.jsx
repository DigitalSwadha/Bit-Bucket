import React from 'react';
import './ScheduleList.css';

const scheduleData = [
  {
    day: 'Thursday',
    events: [
      { title: 'Health checkup complete', time: '11:00 AM', icon: '🩺' },
      
    ]
  },
  {
    day: 'Saturday',
    events: [
      { title: 'Cardiologist', time: '12:03 AM', icon: '❤' },
      
    ]
  }
];

const ScheduleList = () => {
  return (
    <div className="schedule-container">
      <h2 className="schedule-title">The Upcoming Schedule</h2>
      {scheduleData.map((dayItem, idx) => (
        <div key={idx} className="schedule-day">
          <h4 className="day-label">On {dayItem.day}</h4>
          <div className="schedule-cards">
            {dayItem.events.map((event, i) => (
              <div className="schedule-card" key={i}>
                <div className="event-top">
                  <span className="event-title">{event.title}</span>
                  <span className="event-icon">{event.icon}</span>
                </div>
                <span className="event-time">{event.time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduleList;