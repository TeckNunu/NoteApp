import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/HomePage/Home';
import NotFound from '../pages/NotFound';
import PrivateLayout from '../layouts/PrivateLayout';
import TaskPage from '../pages/TaskPage/TaskPage';
import NotePage from '../pages/NotePage/NotePage';
import { AuthContext } from '../contexts/AuthContext';
import GroupPage from '../pages/GroupPage/GroupPage';
import EditTask from '../pages/TaskPage/EditTask';
import AddTask from '../pages/TaskPage/AddTask';
import ProfilePage from '../pages/ProfilePage/ProfilePage';

const PrivateRouter = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <PrivateLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/group" element={<GroupPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        <Route path="/tasks/edit/:id" element={<EditTask />} />
        <Route path="/tasks/new" element={<AddTask />} />
        <Route path="/notes" element={<NotePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PrivateLayout>
  );
};

export default PrivateRouter;
