import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import '../layout/Mypage.css';
import './Calendar.css'

const Calendar = () => {
  const [currDate, setCurrDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(null);

  const updateCalendar = () => {
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();

    const firstDay = new Date(currYear, currMonth, 1);
    const lastDay = new Date(currYear, currMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();

    // console.log(currDate);

    const dates = [];
    for (let i = 0; i < firstDayIndex; i++) {
      dates.push(<div key={`prev${i}`} className="date inactive"></div>);
    }
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currYear, currMonth, i);
      const isToday = new Date().toDateString() === new Date(currYear, currMonth, i).toDateString();
      dates.push(<div key={i} className={`date ${isToday ? 'active' : ''}`} onClick={() => handleDatePick(date)} >{i}</div>);
    }
    return dates;

  };

  const handlePrevMonth = () => {
    setCurrDate(new Date(currDate.getFullYear(), currDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrDate(new Date(currDate.getFullYear(), currDate.getMonth() + 1));
  };

  const handleToday = () => {
    setCurrDate(new Date());
  };

  const [selectedDate, setSelectedDate] = useState('');

  const handleDatePick = (date) => {
    console.log(date);
    setSelectedDate(date); //selectedDate 값 넣기
    // alert(`날짜를 선택했습니다: ${date.toDateString()}`);
    changePosition();

  };

  {/*날짜 이벤트창 나오게 하기 */}
  const [isCalendarTop, setIsCalendarTop] = useState(true);
  const calendarContainerRef = useRef(null);
  const calendarInfoRef = useRef(null);

  const changePosition = () => {
    if(isCalendarTop){
      calendarContainerRef.current.style.zIndex = '1';
      calendarInfoRef.current.style.zIndex = '2';
    } else{
      calendarContainerRef.current.style.zIndex = '2';
      calendarInfoRef.current.style.zIndex = '1';
    }
    setIsCalendarTop(!isCalendarTop);
  }

  return (
    <>

      <div id='calendarContainer' ref={calendarContainerRef}>

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

        {/*날짜 클릭 하는곳 */}
        <div className='dates' id='dates' >
          {updateCalendar()}
        </div>

        <button id='today' onClick={handleToday}>today</button>
        <button id='change' >change</button>

      </div>

        <div className='calendarInfo' ref={calendarInfoRef}>
          <button id='change' onClick={changePosition} >change</button>
          {selectedDate && <p>{selectedDate.toDateString()}</p>} {/*selectedDate값이 있으면 <p>호출됨 */}
        </div>

    </>
  );
};

export default Calendar;