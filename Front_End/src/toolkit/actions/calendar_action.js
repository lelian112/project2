import axios from "axios";
import { calendarReducers } from '../createSlice/calendar';

function getCalendarList() {
  const pathname = window.location.pathname;
  const id = pathname.split('/')[2];
  console.log('id:', id);

  return async (dispatch) => {
    const calendarResponse = await axios
      .post(`/mypage/calendar/${id}`)
      .then((response) => response.data);
    console.log("calendar_data", calendarResponse);

    dispatch(calendarReducers.getCalendarList({
      calendarResponse
    }));
  };
}

export const calendarActions = {
  getCalendarList,
};