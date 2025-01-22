import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import SchedulesPage from './pages/SchedulesPage';
import ScheduleDetailsPage from './pages/ScheduleDetailsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/schedules" element={<SchedulesPage />} />
        <Route path="/schedules/:id" element={<ScheduleDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
