import React from 'react';
import './Signup.css'

const Signup = () => {
  return (
    <>
      <div id='signupLayout'> {/*나중에 지울거*/}
        <div id='signupContainer'>
          <form>
            <div id='newInfo'>
              {/*아이디*/}
              <div className='newId'>
                <i class="login_icon fas fa-user"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>

              {/*비번*/}
              <div className='newPw'>
                <i class="login_icon fas fa-lock"></i>
                <input type='password' className='input_text' placeholder='Enter ID' />
              </div>

              {/*비번체크*/}
              <div className='checkPw'>
                <i class="login_icon fas fa-lock"></i>
                <input type='password' className='input_text' placeholder='Enter ID' />
              </div>

              {/*이메일*/}
              <div className='newEmail'>
                <i class="login_icon fas fa-envelope"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>
            </div>

            {/*인적사항*/}
            <div id='addInfo'>
              {/*닉네임*/}
              <div className='newNickname'>
                <i class="login_icon fas fa-user"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>

              {/*프로필 사진*/}
              <div className='newProPic'>
                <i class="login_icon fas fa-image"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>

              {/*생년월일*/}
              <div className='newProPic'>
                <i class="login_icon fas fa-calendar"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>

              {/*성별*/}
              <div className='gender'>
                <i class="login_icon fas fa-venus-mars"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>

              {/*국가번호*/}
              <div className='countryCode'>
                <i class="login_icon fas fa-globe"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>

              {/*전화번호*/}
              <div className='phoneNo'>
                <i class="login_icon fas fa-mobile-screen"></i>
                <input type='text' className='input_text' placeholder='Enter ID' />
              </div>

            </div>

          </form>
        </div>

      </div>
    </>
  );
};

export default Signup;