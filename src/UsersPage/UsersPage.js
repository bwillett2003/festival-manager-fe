import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UsersPage.css';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className="users-container">
      <h1>Users</h1>

      <div className="user-cards">
        {users.map((user) => (
          <div
            key={user.id}
            className="user-card"
            onClick={() => handleUserClick(user.id)}
          >
            <h2>
              {user.attributes.first_name} {user.attributes.last_name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
