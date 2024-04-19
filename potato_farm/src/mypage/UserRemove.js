import React, { useEffect } from 'react';
import axios from 'axios';

const UserRemove = () => {

  const UserRemove = async () => {
    try {
      const response = await axios
        .delete(`/user/delete/${localStorage.id}`);
      console.log(response);

      localStorage.removeItem('Authorization');
      localStorage.removeItem('nickName');
      localStorage.removeItem('isLogin');
      localStorage.removeItem('name');
      localStorage.removeItem('id');
      localStorage.clear();
      window.location.replace('/login');

    } catch (error) {
      console.error('error', error);
    }

  }

  useEffect(() => {
    UserRemove();
  }, []);
};

export default UserRemove;