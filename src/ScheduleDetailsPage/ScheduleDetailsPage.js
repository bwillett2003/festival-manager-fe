import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ScheduleDetailsPage.css';

const ScheduleDetailsPage = () => {
  const { id } = useParams();
  const [schedule, setSchedule] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/schedules/${id}`)
      .then((response) => response.json())
      .then((data) => setSchedule(data.data))
      .catch((error) => console.error('Error fetching schedule:', error));
  }, [id]);

  if (!schedule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="schedule-details-container">
      <h1>{schedule.attributes.title}</h1>
      <h2>Date: {schedule.attributes.date}</h2>
      <h3>Shows:</h3>
      <ul>
        {schedule.attributes.shows.map((show) => (
          <li key={show.id}>
            {show.artist} - {show.location} at {show.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleDetailsPage;
