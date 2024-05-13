import React, { useEffect } from 'react';

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('email');
    localStorage.removeItem('pw');
    localStorage.removeItem('isLogin');
    localStorage.clear();
    window.location.replace('/login');
  })
};

export default Logout;