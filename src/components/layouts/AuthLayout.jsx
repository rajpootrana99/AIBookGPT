// AuthLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';


const AuthLayout = () => {
  return (
    <div className="app" style={{scrollBehavior:"smooth", overflow: "hidden"}}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
