import React, { useEffect, useState } from 'react';
import './EditInfo.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EditInfo = () => {

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('Authorization'),
    },
  };

  const [users, setUsers] = useState({
    id: '',
    email: '',
    phone: '',
    country_code: '',
  });

  // const { id, email, phone } = users;


  {/*이거를 onchange에 넣어야지만 글짜 적기 가능 */ }
  const handleValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  }

  const info = async () => {
    try {
      const response = await axios
        .get(`/user/editinfo/${localStorage.id}`);
      const data = response.data;

      console.log(data);

      setUsers({ ...users, phone: data.phone, country_code: data.country_code });

    } catch (error) {
      console.error('Error', error);
    }
  };

  useEffect(() => {
    info();
  }, []);

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
            {/* <input type='password' className='input_text' placeholder='pw' name='pw' /> */}
            <Link to='changepw'>
              <button id='changePw'>changePw</button>
            </Link>
          </div>

          <div className='editName'>
            <i>이름:</i>
            <input type='text' className='input_text' placeholder='name' name='name' value={localStorage.name} readOnly />
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
            <input type='text' className='input_text' placeholder='countryCode' name='countryCode' value={users.country_code} onChange={handleValueChange} />
          </div>

          <div className='editPhone'>
            <i>전화번호:</i>
            <input type='text' className='input_text' placeholder='phone' name='phone' value={users.phone} onChange={handleValueChange} />
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