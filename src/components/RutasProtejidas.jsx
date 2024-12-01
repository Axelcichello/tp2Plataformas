import React from 'react';
import { Navigate } from 'react-router-dom';
import { checkAuth } from '../utils/auth';

const RutasProtejidas = ({ element: Component }) => {
  return checkAuth() ? Component : <Navigate to="/login" />;
};

export default RutasProtejidas;