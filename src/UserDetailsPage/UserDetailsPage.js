import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import './UserDetailsPage.css';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('User not found');
        }
        return response.json();
      })
      .then((data) => setUser(data.data))
      .catch(() => setError(true));
  }, [id]);

  useEffect(() => {
    if (error) {
      navigate('/404');
    }
  }, [error, navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-details-container">
      <h1>
        {user.attributes.first_name} {user.attributes.last_name}
      </h1>
      <p>Email: {user.attributes.email}</p>
      <h2>Schedules:</h2>
      <ul>
        {user.attributes.schedules.map((schedule) => (
          <li key={schedule.id}>
            <NavLink
              to={`/schedules/${schedule.id}`}
              className={({ isActive }) =>
                isActive ? 'schedule-link active' : 'schedule-link'
              }
            >
              <strong>{schedule.title}</strong> - {schedule.date}
            </NavLink>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetailsPage;
