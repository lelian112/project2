import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {

  const currentYear = new Date().getFullYear();

  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = Array.from({ length: 12 }, (_, index) => index + 1);
  const years = Array.from({ length: currentYear - 1999 }, (_, index) => currentYear - index);


  return (
    <>
      <div id='signupLayout'> {/*나중에 지울거*/}
        <form>
          <div id='signupContainer'>
            <div id='newInfo'>
              {/*아이디*/}
              <div className='newId'>
                <i class="login_icon fas fa-user  "></i>
                <input type='text' className='input_text' placeholder='Username' />
              </div>

              {/*비번*/}
              <div className='newPw'>
                <i class="login_icon fas fa-lock  "></i>
                <input type='password' className='input_text' placeholder='Password' />
              </div>

              {/*비번체크*/}
              <div className='checkPw'>
                <i class="login_icon fas fa-lock  "></i>
                <input type='password' className='input_text' placeholder='Password check' />
              </div>

              {/*이메일*/}
              <div className='newEmail'>
                <i class="login_icon fas fa-envelope  "></i>
                <input type='text' className='input_text' placeholder='Email' />
              </div>
            </div>

            {/*인적사항*/}
            <div id='addInfo'>
              {/*닉네임*/}
              <div className='newNickname'>
                <i class="login_icon fas fa-user fa-fw"></i>
                <input type='text' className='input_text' placeholder='Nickname' />
              </div>

              {/*프로필 사진*/}
              <div className='newProPic'>
                <i class="login_icon fas fa-image fa-fw"></i>
                <input type='text' className='input_text' placeholder='Picture' />
              </div>

              {/*생년월일*/}
              <div className='newProPic'>
                <i class="login_icon fas fa-calendar fa-fw"></i>
                <select id='month'>
                  <option style={{ display: 'none' }} selected value='0'>Month</option>
                  {/* 배열을 매핑하여 옵션 생성 */}
                  {months.map(month => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>

                <select id='day'>
                  <option style={{ display: 'none' }} selected value='0'>Day</option>
                  {/* 배열을 매핑하여 옵션 생성 */}
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>

                <select id='year'>
                  <option style={{ display: 'none' }} selected value='0'>Year</option>
                  {/* 배열을 매핑하여 옵션 생성 */}
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>

              </div>

              {/*성별*/}
              <div className='gender'>
                <i class="login_icon fas fa-venus-mars fa-fw"></i>

                <input type='radio' id='maleRadio' name='gender'></input>
                <label for='maleRadio'>
                  <div className='genderText'>Male</div>
                </label>

                <input type='radio' id='femaleRadio' name='gender'></input>
                <label for='femaleRadio'>
                  <div className='genderText'>Female</div>
                </label>


              </div>

              {/*국가번호*/}
              <div className='countryCode'>
                <i class="login_icon fas fa-globe fa-fw"></i>
                <input type='text' className='input_text' placeholder='Country Code' />
              </div>

              {/*전화번호*/}
              <div className='phoneNo'>
                <i class="login_icon fas fa-mobile-screen fa-fw"></i>
                <input type='text' className='input_text' placeholder='Phone Number' maxLength='11' />
              </div>

            </div>

            <Link to='/mypage'>
              <button id='signupSubmit'>SignUp</button>
            </Link>
          </div>

        </form>
      </div>
    </>
  );
};

export default Signup;