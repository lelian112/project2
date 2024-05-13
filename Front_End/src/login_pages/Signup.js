import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  {
    /*name -> nick_name으로 바꾸기 */
  }
  const [users, setUsers] = useState({
    id: "",
    pw: "",
    email: "",
    nick_name: "",
    pic: null,
    birth: "",
    gender: "",
    country_code: "",
    phone: "",
    mbti: "",
  });

  {
    /*name -> nick_name으로 바꾸기 */
  }
  const { id, pw, email, nick_name, pic, birth, phone } = users;

  const handleValueChange = (e) => {
    setUsers((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  {
    /*비번체크 */
  }
  const [pwCheck, setPwCheck] = useState("");

  const passCheck = (e) => {
    if (pw !== e.target.value) {
      setPwCheck("비밀번호 불일치");
    } else {
      setPwCheck("비밀번호 일치");
    }
  };

  {
    /*아디 체크 */
  }
  const IDcheck = async (e) => {
    e.preventDefault();
    const userInputId = users.id;
    console.log(`User input ID: '${userInputId}'`);

    if (userInputId === "") {
      alert("아이디 입력");
      return;
    }

    try {
      const response = await axios.get(
        `/api/users/check-duplicate?id=${userInputId}`
      );
      const isNotDuplicate = response.data;

      console.log(response.data);

      if (isNotDuplicate) {
        alert("사용 가능한 아이디입니다.");
      } else {
        alert("이미 사용중인 아이디 입니다.");
      }
    } catch (error) {
      console.error(error);
      alert("오류 발생");
    }
  };

  {
    /*mbti, gender, country_code */
  }
  const [mbti, setMbti] = useState([]);
  const [genderlist, setGenderList] = useState([]);
  const [countryCodelist, setCountryCodeList] = useState([]);

  const chooseInfo = async () => {
    try {
      const response = await axios.get(`user/data`);
      const data = response.data;
      console.log(data);

      const genderData = data.Gender;
      console.log("gender:", genderData);
      setGenderList(genderData);

      const codeData = data.CountryCode;
      console.log("country_code", codeData);
      setCountryCodeList(codeData);

      const mbtiData = data.MBTI;
      console.log("mbti", mbtiData);
      setMbti(mbtiData);

      // for (let i = 0; i < gender.length; i++) {
      //   let value = gender[i];
      //   console.log(value);
      //   setGender(value);
      // }
    } catch (error) {
      console.error("error:", error);
    }
  };

  {
    /*파일 */
  }
  // const handleFileChange = (e) => {
  //   e.preventDefault();
  //   setUsers((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  {
    /*form submit */
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`/signup`, users)
      .then((response) => {
        console.log(response);
        window.location.replace("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    chooseInfo();
  }, []);

  return (
    <>
      <div id='signupLayout'>
        {" "}
        {/*나중에 지울거*/}
        <form className='formContainer' onSubmit={onSubmit}>
          <div id='signupContainer'>
            <div id='newInfo'>
              {/*아이디*/}
              <div className='newId'>
                <i class='login_icon fas fa-user  '></i>
                <input
                  type='text'
                  className='input_text'
                  placeholder='ID'
                  name='id'
                  value={users.id}
                  onChange={handleValueChange}
                />
                <button id='checkID' onClick={IDcheck}>
                  중복체크
                </button>
              </div>

              {/*비번*/}
              <div className='newPw'>
                <i class='login_icon fas fa-lock  '></i>
                <input
                  type='password'
                  className='input_text'
                  placeholder='Password'
                  name='pw'
                  onChange={handleValueChange}
                />
              </div>

              {/*비번체크*/}
              <div className='checkPw'>
                <i class='login_icon fas fa-lock  '></i>
                <input
                  type='password'
                  className='input_text'
                  placeholder='Password check'
                  onChange={passCheck}
                />
                <span>{pwCheck}</span>
              </div>

              {/*이메일*/}
              <div className='newEmail'>
                <i class='login_icon fas fa-envelope  '></i>
                <input
                  type='text'
                  className='input_text'
                  placeholder='Email'
                  name='email'
                  onChange={handleValueChange}
                />
              </div>
            </div>

            <div id='addInfo'>
              {/*닉네임*/}
              <div className='newNickname'>
                <i class='login_icon fas fa-user fa-fw'></i>
                <input
                  type='text'
                  className='input_text'
                  placeholder='Nickname'
                  name='nick_name'
                  onChange={handleValueChange}
                />
              </div>

              {/*프로필 사진*/}
              {/* <div className='newProPic'>
                <i class="login_icon fas fa-image fa-fw"></i>
                <input type='file' className='input_text' name='pic' onChange={handleFileChange} />
              </div> */}

              {/*생년월일*/}
              <div className='newBirth'>
                <i class='login_icon fas fa-calendar fa-fw'></i>
                <input
                  type='date'
                  className='input_text'
                  name='birth'
                  onChange={handleValueChange}
                />
              </div>

              {/*성별 - 1 안들어감*/}
              <div className='gender'>
                <i class='login_icon fas fa-venus-mars fa-fw'></i>

                <select name='gender' onChange={handleValueChange}>
                  <option value=''>--Please choose Gender--</option>
                  {genderlist.map((code, idx) => (
                    <option key={idx} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>

              {/*국가번호*/}
              <div className='countryCode'>
                <i class='login_icon fas fa-globe fa-fw'></i>
                <select name='country_code' onChange={handleValueChange}>
                  <option value=''>--Please choose Country code--</option>
                  {countryCodelist.map((code, idx) => (
                    <option key={idx} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>

              {/*MBTI*/}
              <div className='mbtiSelect'>
                <i class='login_icon fas fa-address-card fa-fw'></i>
                <select name='mbti' onChange={handleValueChange}>
                  <option value=''>--Please choose MBTI--</option>
                  {mbti.map((code, idx) => (
                    <option key={idx} value={code}>
                      {code}
                    </option>
                  ))}
                </select>
              </div>

              {/*전화번호*/}
              <div className='phoneNo'>
                <i class='login_icon fas fa-mobile-screen fa-fw'></i>
                <input
                  type='text'
                  className='input_text'
                  placeholder='Phone Number'
                  maxLength='11'
                  name='phone'
                  onChange={handleValueChange}
                />
              </div>
            </div>

            <button id='signupSubmit'>SignUp</button>
            {/* <p>select<strong>{genders}</strong></p> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
