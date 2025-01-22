import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './UserDetailsPage.css';

const UserDetailsPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data.data))
      .catch((error) => console.error('Error fetching user details:', error));
  }, [id]);

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
            <Link to={`/schedules/${schedule.id}`}>
              <strong>{schedule.title}</strong> - {schedule.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetailsPage;
