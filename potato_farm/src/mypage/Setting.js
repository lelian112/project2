import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Setting.css'
import { Link } from 'react-router-dom';

const Setting = () => {

  // const [checkpw, setCheckpw] = useState({ pw: '' });

  const navigate = useNavigate();

  console.log(localStorage.pw); //undefined


  {/*비번체크 */ }
  // const passCheck = (e) => {
  //   const userInputpw = checkpw.pw;
  //   if (localStorage.pw !== userInputpw) {
  //     setCheckpw('비밀번호 불일치');
  //   } else {
  //     setCheckpw('비밀번호 일치');
  //   }
  // };

  // const submit = () => {
  //   const userInputpw = checkpw.pw;
  //   if (userInputpw) {
  //     setCheckpw('비밀번호 불일치');
  //     return;
  //   } else {
  //     // setCheckpw('비밀번호 일치');
  //     navigate('/mypage');
  //   }
  // };

  const [checkpw, setCheckpw] = useState({ pw: '' });
  const [passwordStatus, setPasswordStatus] = useState('');

  useEffect(() => {
    const storedPassword = localStorage.getItem('pw');
    console.log(storedPassword);
    if (storedPassword) {
      setCheckpw({ pw: storedPassword });
    }
  }, []);

  const handlePasswordChange = (e) => {
    setCheckpw({ pw: e.target.value });
  };

  const passCheck = () => {
    if (checkpw.pw !== localStorage.getItem('pw')) {
      setPasswordStatus('비밀번호 불일치');
    } else {
      setPasswordStatus('비밀번호 일치');
      navigate('/mypage');
    }
  };

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
          <input type='password' placeholder='Password' className='input_text' maxLength='20' value={checkpw.pw} onChange={handlePasswordChange} />

          <p></p>

          <button id='settingButton' onClick={passCheck}>Next</button>

        </div>

      </div>
    </>
  );
};

export default Setting;