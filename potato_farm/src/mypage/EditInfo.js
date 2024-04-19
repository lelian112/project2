import React, { useEffect, useState } from 'react';
import './EditInfo.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSyncExternalStore } from 'react';

const EditInfo = () => {

  // const config = {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: localStorage.getItem('Authorization'),
  //   },
  // };

  const [users, setUsers] = useState({
    id: '',
    email: '',
    phone: '',
    pw: '',
    country_code: '',
    nick_name: '',
    birth: '',
    name: '',
  });

  const { id, email, phone, pw, country_code, nick_name, birth, name } = users;


  const showName = (name) => {
    if (name === null) {
      return "";
    } else {
      return name;
    };
  };

  const changeDate = (birth) => {
    const date = new Date(birth);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}-${month}-${day}`;
  }

  {/*이거를 onchange에 넣어야지만 글짜 적기 가능 */ }
  const handleValueChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  }

  const info = async () => {
    try {
      const response = await axios.get(`/user/editinfo/${localStorage.id}`);
      const data = response.data;

      console.log(data);

      setUsers((prev) => {
        return { ...prev, ...response.data, pw: '' };
      });

    } catch (error) {
      console.error('Error', error);
    }
  };

  // const [pwCheck, setPwCheck] = useState('');

  {/*비번체크 */ }
  // const passCheck = (e) => {
  //   if (pw !== e.target.value) {
  //     setPwCheck('비밀번호 불일치');
  //   } else {
  //     setPwCheck('비밀번호 일치');
  //   }
  // };

  const submit = async (e) => {
    e.preventDefault();

    if (!pw.trim()) {
      alert('비밀번호를 입력하세요.');
      return;
    }

    await axios
      .put(`/user/update`, users)
      .then((response) => {
        console.log(response);
        window.location.replace('/mypage');
      })
      .catch((error) => {
        console.log(error);
      });
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
        <form onSubmit={submit}>
          <div className='editInfo'>
            <div className='editId'>
              <span>아이디:</span>
              <input type='text' className='input_text' name='id' value={localStorage.id} readOnly />
            </div>

            <div className='editPw'>
              <span>비번:</span>
              <input type='password' className='input_text' placeholder='pw' name='pw' />
              {/* <Link to='changepw'>
                <button id='changePw'>changePw</button>
              </Link> */}
            </div>

            <div className='editCheckPw'>
              <span>비번확인:</span>
              <input type='password' className='input_text' placeholder='pw' name='pw' />
              {/* <Link to='changepw'>
                <button id='changePw'>changePw</button>
              </Link> */}
            </div>

            <div className='editName'>
              <span>이름:</span>
              <input type='text' className='input_text' name='name' readOnly value={showName(name)} />
            </div>

            <div className='editNick'>
              <span>닉네임:</span>
              <input type='text' className='input_text' name='nick_name' value={localStorage.nickName} />
            </div>

            <div className='editEmail'>
              <span>이메일:</span>
              <input type='text' className='input_text' name='email' value={email} />
            </div>

            <div className='editPic'>
              <span>프로필:</span>
              <input type='file' className='input_text' />
            </div>

            <div className='editBirth'>
              <span>생일:</span>
              <input type='text' className='input_text' name='birth' value={changeDate(birth)} readOnly />
            </div>

            <div className='editCountryCode'>
              <span>국가:</span>
              <input type='text' className='input_text' name='countryCode' value={country_code} onChange={handleValueChange} />
            </div>

            <div className='editPhone'>
              <span>전화번호:</span>
              <input type='text' className='input_text' name='phone' value={phone} onChange={handleValueChange} />
            </div>

            <div className='editMbti'>
              <span>MBTI:</span>
              <input type='text' className='input_text' name='mbti' />
            </div>

            <div className='editCaption'>
              <span>Caption:</span>
              <input type='text' className='input_text' name='caption' maxLength='200' />
            </div>

            <button id='editConfirm'>수정완료</button>

            <Link to='userremove'>
              <button id='deleteAcct'>회원탈퇴</button>
            </Link>

          </div>

        </form>

      </div>
    </>
  );
};

export default EditInfo;