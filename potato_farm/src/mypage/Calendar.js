import React, { useState } from 'react';
// import '../layout/Mypage.css';
import './Calendar.css'

const Calendar = () => {
  const [currDate, setCurrDate] = useState(new Date());

  const updateCalendar = () => {
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();

    const firstDay = new Date(currYear, currMonth, 1);
    const lastDay = new Date(currYear, currMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();

    const dates = [];
    for (let i = 0; i < firstDayIndex; i++) {
      dates.push(<div key={`prev${i}`} className="date inactive"></div>);
    }
    for (let i = 1; i <= totalDays; i++) {
      const isToday = new Date().toDateString() === new Date(currYear, currMonth, i).toDateString();
      dates.push(<div key={i} className={`date ${isToday ? 'active' : ''}`}>{i}</div>);
    }
    return dates;
  }

  const handlePrevMonth = () => {
    setCurrDate(new Date(currDate.getFullYear(), currDate.getMonth() - 1));
  }

  const handleNextMonth = () => {
    setCurrDate(new Date(currDate.getFullYear(), currDate.getMonth() + 1));
  }

  const handleToday = () => {
    setCurrDate(new Date());
  }


  return (
    <>

      <div id='calendarContainer'>
        <div className='calendarTitle'>
          <button id='prevBtn' onClick={handlePrevMonth}>
            <i className='icon fa-solid fa-chevron-left'></i>
          </button>
          <span>{currDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
          <button id='nextBtn' onClick={handleNextMonth}>
            <i className='icon fa-solid fa-chevron-right'></i>
          </button>

        </div>

        <div className='days'>
          <div className='day'>월</div>
          <div className='day'>화</div>
          <div className='day'>수</div>
          <div className='day'>목</div>
          <div className='day'>금</div>
          <div className='day'>토</div>
          <div className='day'>일</div>
        </div>

        <div className='dates' id='dates'>
          {updateCalendar()}
        </div>

        <button id='today' onClick={handleToday}>today</button>
      </div>

    </>
  );
};

export default Calendar;