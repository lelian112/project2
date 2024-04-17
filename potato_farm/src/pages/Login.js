import React, { useState } from 'react';
import "./Login.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Login = () => {

  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
    nick_name: '',
    email:'',
  });

  {/*variable 하나로 묶기 */ }
  const { id, pw } = inputs;

  const handleValueChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`/login`, inputs)
      .then((response) => {
        let jwtToken = response.headers.get('authorization');
        console.log(jwtToken);

        localStorage.setItem('Authorization', jwtToken);
        localStorage.setItem('id', response.data.id);
        // localStorage.setItem('pw', response.data.pw);
        localStorage.setItem('nickName', response.data.nickName);
        localStorage.setItem('name', response.data.name);

        localStorage.setItem('isLogin', true);

        setInputs({ id: '', pw: '' });
        return response.data.id;
      })
      .then(() => {
        window.location.replace('/mypage');
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      <div id='loginLayout'> {/*나중에 지울거*/}
        <div id='loginContainer'>

          <form onSubmit={onSubmit}>
            {/*이메일 */}
            <div className='infoContainer'>
              <div className='id'>
                <i class="login_icon fas fa-user"></i>
                <input type='text' className='input_text' placeholder='Enter ID' name='id' value={id} onChange={handleValueChange} />
              </div>

              {/*비번 */}
              <div className='pw'>
                <i class="login_icon fas fa-lock"></i>
                <input type='password' className='input_text' placeholder='Enter PW' name='pw' value={pw} onChange={handleValueChange} maxLength='12' />
              </div>
            </div>

            <button id='loginSubmit'>Login</button>

            <Link to='/policy'>
              <button id='signUpButton'>SignUp</button>
            </Link>
          </form>

        </div >
        <div className='socialLogin'>
          <p>다른방법 로그인:</p>
          <button id='a'>a</button>
          <button id='b'>b</button>
          <button id='c'>c</button>
          <button id='d'>d</button>
        </div>
      </div >
    </>
  );
};

export default Login;