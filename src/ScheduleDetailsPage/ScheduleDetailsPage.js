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
          alert('Show removed successfully!');
        } else {
          console.error('Failed to delete the show');
        }
      })
      .catch((error) => console.error('Error deleting the show:', error));
  };

  if (!schedule) {
    return <div>Loading...</div>;
  }

  return (
    <div className="schedule-details-container">
      <h1>{schedule.attributes.title}</h1>
      <h2>Date: {schedule.attributes.date}</h2>
      <h3>Shows:</h3>
      <ul className="shows-list">
        {schedule.attributes.shows.map((show) => (
          <li key={show.id} className="show-item">
            <span>
              {show.artist} - {show.location} at {show.time}
            </span>
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
