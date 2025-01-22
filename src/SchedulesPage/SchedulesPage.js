import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SchedulesPage.css';

const SchedulesPage = () => {
  const [schedules, setSchedules] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/schedules')
      .then((response) => response.json())
      .then((data) => setSchedules(data.data))
      .catch((error) => console.error('Error fetching schedules:', error));
  }, []);

  const handleScheduleClick = (scheduleId) => {
    navigate(`/schedules/${scheduleId}`);
  };

  return (
    <div className="schedules-container">
      <h1>Schedules</h1>

      <div className="schedule-cards">
        {schedules.map((schedule) => (
          <div
            key={schedule.id}
            className="schedule-card"
            onClick={() => handleScheduleClick(schedule.id)}
          >
            <h2>{schedule.attributes.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SchedulesPage;
