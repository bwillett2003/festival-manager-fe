import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import UsersPage from '../UsersPage/UsersPage';
import UserDetailsPage from '../UserDetailsPage/UserDetailsPage';
import SchedulesPage from '../SchedulesPage/SchedulesPage';
import ScheduleDetailsPage from '../ScheduleDetailsPage/ScheduleDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/schedules/:id" element={<ScheduleDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
