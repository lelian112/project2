import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Setting.css'
import { Link } from 'react-router-dom';
import { HmacSHA512 } from 'crypto-js';
import axios from 'axios';

const Setting = () => {

  const [password, setpassword] = useState('');

  const navigate = useNavigate();

  // const jwt = require('jsonwebtoken');

  const handlepwchange = (e) => {
    setpassword(e.target.value)
  }

  const hashPassword = (password) => {
    const key = 'mySecurityCos'; // 비밀 키 (환경 변수에서 가져오는 것이 좋습니다)
    const hash = HmacSHA512(password, key).toString();
    // hash.update(password);

    // const token = jwt.sign({password: hash}, key);

    return hash;
  };

  const checkpassword = async (e) => {
    e.preventDefault();
    const hashedpassword = hashPassword(password);
    console.log(hashedpassword);

    try {
      const response = await axios
        .get(`/user/editinfo/${localStorage.id}`);
      const data = response.data.pw;

      console.log(data);

      if(hashedpassword === data ){
        navigate('/editinfo');
    } else{
      alert('Invalid password. Please try again.');
    }

    } catch (error) {
      console.error('error', error);
    }
    
    
    
  }

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
          <input type='text' placeholder='Password' className='input_text' maxLength='20' value={password} onChange={handlepwchange} />

          <p></p>

          <button id='settingButton' onClick={checkpassword} >Next</button>

        </div>

      </div>
    </>
  );
};

export default Setting;