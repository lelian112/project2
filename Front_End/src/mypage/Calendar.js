import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
// import '../layout/Mypage.css';
import axios from 'axios';
import './Calendar.css'
import { wishActions } from '../toolkit/actions/mypagewish_action';
import { calendarActions } from '../toolkit/actions/calendar_action';


const Calendar = () => {
  const [currDate, setCurrDate] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(null);

  {/*리스트 가져오기 */ }
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.calendar.wishList);
  const reviewList = useSelector((state) => state.calendar.reviewList);
  const rateList = useSelector((state) => state.calendar.rateList);

  console.log('wishlist', wishList);

  const getCalendarList = () => {
    dispatch(calendarActions.getCalendarList());
  };

  {/**주소에서 id가져오기 */ }
  const pathname = window.location.pathname;
  const id = pathname.split('/')[2];
  console.log('id:', id);

  const updateCalendar = () => {
    const currYear = currDate.getFullYear();
    const currMonth = currDate.getMonth();

    const firstDay = new Date(currYear, currMonth, 1);
    const lastDay = new Date(currYear, currMonth + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayIndex = firstDay.getDay();

    // console.log(currDate);
    {/**달력 만들기 */ }
    const dates = [];
    for (let i = 0; i < firstDayIndex; i++) {
      dates.push(<div key={`prev${i}`} className="date inactive"></div>);
    }
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(currYear, currMonth, i);
      const isToday = new Date().toDateString() === new Date(currYear, currMonth, i).toDateString();
      const hasEvent = wishList.some(item => changeDate(item.regist_at) === changeDate(date));
      const dateClass = `date ${isToday ? 'active' : ''} ${hasEvent ? 'event' : ''}`;
      dates.push(<div key={i} className={dateClass} onClick={() => handleDatePick(date)}>{i}</div>);
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

  {/*날짜 이벤트창 나오게 하기 */ }
  const [isCalendarTop, setIsCalendarTop] = useState(true);
  const calendarContainerRef = useRef(null);
  const calendarInfoRef = useRef(null);

  const changePosition = () => {
    if (isCalendarTop) {
      calendarContainerRef.current.style.zIndex = '1';
      calendarInfoRef.current.style.zIndex = '2';
    } else {
      calendarContainerRef.current.style.zIndex = '2';
      calendarInfoRef.current.style.zIndex = '1';
    }
    setIsCalendarTop(!isCalendarTop);
  }

  {/**날짜 바꾸기 */ }
  const changeDate = (registDate) => {
    const date = new Date(registDate);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  }


  useEffect(() => {
    // getinfo();
    getCalendarList();
  }, []);


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


      </div>

      <div className='calendarInfo' ref={calendarInfoRef}>
        {/* {selectedDate && <p>{selectedDate.toDateString()}</p>} */}
        {/*selectedDate값이 있으면 <p>호출됨 */}
        <div className='title'>
          <h3>찜한 목록</h3>
          <div className='line' />
        </div>
        <div className='calendarContainer'>
          {wishList.map(item => {
            // 그 날에 활동한게 잇으면 보여주기
            if (changeDate(item.regist_at) === changeDate(selectedDate)) {
              return (
                <div className='movie' key={item.idx}>
                  <img src={item.poster} />
                  <p>{item.name_kor}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className='title'>
          <h3>리뷰 목록</h3>
          <div className='line' />
        </div>
        <div className='calendarContainer'>
          {reviewList.map(item => {
            // 그 날에 활동한게 잇으면 보여주기
            if (changeDate(item.regist_at) === changeDate(selectedDate)) {
              return (
                <div className='movie' key={item.idx}>
                  <img src={item.poster} />
                  <p>{item.name_kor}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className='title'>
          <h3>별점 목록</h3>
          <div className='line' />
        </div>
        <div className='calendarContainer'>
          {rateList.map(item => {
            // 그 날에 활동한게 잇으면 보여주기
            if (changeDate(item.regist_at) === changeDate(selectedDate)) {
              return (
                <div className='movie' key={item.idx}>
                  <img src={item.poster} />
                  <p>{item.name_kor}</p>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className='changeBtn'>
          <button id='change' onClick={changePosition} >change</button>
        </div>

      </div>

    </>
  );
};

export default Calendar;
