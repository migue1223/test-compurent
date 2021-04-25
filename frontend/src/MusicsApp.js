import React from 'react';
import { AuthProvider } from './auth/AuthContext';
import { AppRouter } from './routers/AppRouter';

export const MusicsApp = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};
