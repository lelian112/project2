import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css'
import axios from 'axios';

const Signup = () => {

  const [users, setUsers] = useState({
    id: '',
    pw: '',
    email: '',
    name: '',
    pic: null,
    birth: '',
    country_code: '',
    phone: '',
  });

  const { id, pw, email, name, pic, birth, country_code, phone } = users;

  const handleValueChange = (e) => {
    setUsers((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    })
  }

  // const [genders, setGenders] = useState(
  //   { gender: 0 }
  // );

  // {/*gender check */}
  // const handleGenderChange = (e) => {
  //   setGenders(parseInt(e.target.value));
  // };

  const [pwCheck, setPwCheck] = useState('');

  {/*비번체크 */ }
  const passCheck = (e) => {
    if (pw !== e.target.value) {
      setPwCheck('비밀번호 불일치');
    } else {
      setPwCheck('비밀번호 일치');
    }
  };

  const [idcheck, setIdCheck] = useState(false);

  {/*아디 체크 */ }
  const IDcheck = async (e) => {
    e.preventDefault();
    const userInputId = users.id;
    console.log(`User input ID: '${userInputId}'`);
  
    if (userInputId === "") {
      alert('아이디 입력');
      return;
    }
  
    try {
      const response = await axios.get(`/api/users/check-duplicate?id=${userInputId}`);
      const isNotDuplicate  = response.data;

      console.log(response.data);

      if (isNotDuplicate) {
        alert('사용 가능한 아이디입니다.');
      } else {
        alert('이미 사용중인 아이디 입니다.');
      }
    } catch (error) {
      console.error(error);
      alert('오류 발생');
    }
  };

  {/*파일 */ }
  const handleFileChange = (e) => {
    e.preventDefault();
    setUsers((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`/signup`, users)
      .then((response) => {
        console.log(response);
        window.location.replace('/login');
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <>
      <div id='signupLayout'> {/*나중에 지울거*/}
        <form className='formContainer' onSubmit={onSubmit}>
          <div id='signupContainer'>

            <div id='newInfo'>
              {/*아이디*/}
              <div className='newId'>
                <i class="login_icon fas fa-user  "></i>
                <input type='text' className='input_text' placeholder='ID' name='id' value={users.id} onChange={handleValueChange} />
                <button id='checkID' onClick={IDcheck}>중복체크{idcheck}</button>
              </div>

              {/*비번*/}
              <div className='newPw'>
                <i class="login_icon fas fa-lock  "></i>
                <input type='password' className='input_text' placeholder='Password' name='pw' onChange={handleValueChange} />
              </div>

              {/*비번체크*/}
              <div className='checkPw'>
                <i class="login_icon fas fa-lock  "></i>
                <input type='password' className='input_text' placeholder='Password check' onChange={passCheck} />
                <span>{pwCheck}</span>
              </div>

              {/*이메일*/}
              <div className='newEmail'>
                <i class="login_icon fas fa-envelope  "></i>
                <input type='text' className='input_text' placeholder='Email' name='email' onChange={handleValueChange} />
              </div>
            </div>

            {/*인적사항 프론트에선 nickname, 백에선 name*/}
            <div id='addInfo'>
              {/*닉네임*/}
              <div className='newNickname'>
                <i class="login_icon fas fa-user fa-fw"></i>
                <input type='text' className='input_text' placeholder='Nickname' name='name' onChange={handleValueChange} />
              </div>

              {/*프로필 사진*/}
              <div className='newProPic'>
                <i class="login_icon fas fa-image fa-fw"></i>
                <input type='file' className='input_text' name='pic' onChange={handleFileChange} />
              </div>

              {/*생년월일*/}
              <div className='newBirth'>
                <i class="login_icon fas fa-calendar fa-fw"></i>
                <input type='date' className='input_text' name='birth' onChange={handleValueChange} />

              </div>

              {/*성별 - 1 안들어감*/}
              {/* <div className='gender'>
                <i class="login_icon fas fa-venus-mars fa-fw"></i>

                <input type='radio' id='maleRadio' name='gender' value={0} checked={genders.gender === 0} onChange={handleGenderChange}></input>
                <label for='maleRadio'>
                  <div className='genderText'>Male</div>
                </label>

                <input type='radio' id='femaleRadio' name='gender' value={1} checked={genders.gender === 1} onChange={handleGenderChange}></input>
                <label for='femaleRadio'>
                  <div className='genderText'>Female</div>
                </label>

              </div> */}

              {/*국가번호*/}
              <div className='countryCode'>
                <i class="login_icon fas fa-globe fa-fw"></i>
                <input type='text' className='input_text' placeholder='Country Code' name='country_code' onChange={handleValueChange} />
              </div>

              {/*전화번호*/}
              <div className='phoneNo'>
                <i class="login_icon fas fa-mobile-screen fa-fw"></i>
                <input type='text' className='input_text' placeholder='Phone Number' maxLength='11' name='phone' onChange={handleValueChange} />
              </div>

            </div>

            <button id='signupSubmit'>SignUp</button>
            {/* <p>select<strong>{genders}</strong></p> */}
          </div>
        </form>

      </div >
    </>
  );
};

export default Signup;