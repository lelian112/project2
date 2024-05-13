import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  wishList: [],
  rateList: [],
  reviewList: [],
}

const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    getCalendarList(state, action){
      console.log('action_calendar:', action.payload);
      state.wishList = action.payload.calendarResponse.wishList;
      state.rateList = action.payload.calendarResponse.rateList;
      state.reviewList = action.payload.calendarResponse.reviewList;
    },
  },
});

export const calendarReducers = calendarSlice.actions;

export default calendarSlice;