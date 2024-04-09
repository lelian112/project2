import React from 'react';
import './Setting.css'
import { Link } from 'react-router-dom';

const Setting = () => {
  return (
    <>
      <div id='settingContainer'>

        <div className='settingTitle'>
          <h3>회원 정보 수정</h3>
          <p>
            회원님의 소중한 정보를 정보를 안전하게 관리하세요.
          </p>
        </div>

        <div className='line' />

        <div className='settingContent'>
          <p>회원 정보를 수정하시려면 비밀번호를 입력해주세요.</p>
          <p>
            회원님의 개인정보 보호를 위한 본인 확인 절차이오니, 감자밭 로그인 시 사용하시는 비밀번호를 입력해주세요.</p>
          <input type='password' placeholder='Password' className='input_text' maxLength='20' />
          <p></p>
          <Link to='editinfo'>
            <button id='settingButton'>Next</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Setting;