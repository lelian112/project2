import React from 'react';
import './EditInfo.css';
import { Link } from 'react-router-dom';

const EditInfo = () => {


  return (
    <>
      <div id='editContainer'>
        {/* <div className='editTitle'>
          <h3>회원 정보 수정</h3>
          <p>
            회원님의 소중한 정보를 정보를 안전하게 관리하세요.
          </p>
        </div> */}

        <div className='editInfo'>
          <div className='editId'>
            <i>아이디:</i>
            <input type='text' className='input_text' placeholder='ID' name='id' value={localStorage.id} readOnly />
          </div>

          <div className='editPw'>
            <i>비번:</i>
            <input type='password' className='input_text' placeholder='pw' name='pw' />
          </div>

          <div className='editName'>
            <i>이름:</i>
            <input type='text' className='input_text' placeholder='name' name='name' value={localStorage.name}readOnly />
          </div>

          <div className='editNick'>
            <i>닉네임:</i>
            <input type='text' className='input_text' placeholder='nickname' name='nickname' />
          </div>

          <div className='editEmail'>
            <i>이메일:</i>
            <input type='text' className='input_text' placeholder='email' name='email' value={localStorage.email} />
          </div>

          <div className='editPic'>
            <i>프로필:</i>
            <input type='file' className='input_text' />
          </div>

          <div className='editBirth'>
            <i>생일:</i>
            <input type='text' className='input_text' placeholder='birth' name='birth' />
          </div>

          <div className='editCountryCode'>
            <i>국가:</i>
            <input type='text' className='input_text' placeholder='countryCode' name='countryCode' />
          </div>

          <div className='editPhone'>
            <i>전화번호:</i>
            <input type='text' className='input_text' placeholder='phoneNo' name='phoneNo' />
          </div>

          <div className='editMbti'>
            <i>MBTI:</i>
            <input type='text' className='input_text' placeholder='mbti' name='mbti' />
          </div>

        </div>

        <button id='deleteAcct'>회원탈퇴</button>

      </div>
    </>
  );
};

export default EditInfo;