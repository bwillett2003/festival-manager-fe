import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ScheduleDetailsPage.css';

const ScheduleDetailsPage = () => {
  const { id } = useParams();
  const [schedule, setSchedule] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/schedules/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Schedule not found');
        }
        return response.json();
      })
      .then((data) => setSchedule(data.data))
      .catch(() => setError(true));
  }, [id]);

  const handleRemoveShow = (showId) => {
    fetch(`http://localhost:3000/api/v1/schedules/${id}/shows/${showId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setSchedule((prevSchedule) => ({
            ...prevSchedule,
            attributes: {
              ...prevSchedule.attributes,
              shows: prevSchedule.attributes.shows.filter((show) => show.id !== showId),
            },
          }));
        } else {
          console.error('Failed to delete the show');
        }
      })
      .catch((error) => console.error('Error deleting the show:', error));
  };

  useEffect(() => {
    if (error) {
      navigate('/404');
    }
  }, [error, navigate]);

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
          <li key={show.id} className="show-item">
            {show.artist} - {show.location} at {show.time}
            <button
              className="remove-show-button"
              onClick={() => handleRemoveShow(show.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleDetailsPage;
