import axios from 'axios';

function getUserDetail(config){
  return async (dispatch) => {
    const data = await axios 
    .get(`/user/editinfo/${id}`, config)
    .then((response) => response.data);
    dispatch(getUserDetail({data}));
  };
};

function getUserUpdate(formData, config){
  return async () => {
    await axios.put
  }
}

export const userActions = {
  getUserDetail,
};
